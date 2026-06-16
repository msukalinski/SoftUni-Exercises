import { DetailedContent, findItemById } from "./content-types";
import { NotifyOnSuccess } from "./decorators";
import { Viewer } from "./models";

export class ContentManager {
    private contentItems: DetailedContent[] = [];
    private viewers: Map<number, Viewer[]> = new Map();

    addContent(item: DetailedContent): string {
        this.contentItems.push(item);
        this.viewers.set(item.id, []);
        return `Content "${item.title}" (ID: ${item.id}) has been added.`;
    }

    @NotifyOnSuccess('Email');
    markAsWatched(contentId: number, viewer: Viewer): string {
        if (this.viewers.has(contentId)) {
            return `ERROR: Content with ID ${contentId} not found.`;
        }

        this.viewers.get(contentId)!.push(viewer);
        return `Viewer ${viewer.name} marked content ID ${contentId} as watched.`;
    }

    listAllContent(): string[] {
        return this.contentItems.map(item => item.getDetails());
    }

    findContent(contentId: number): DetailedContent | undefined {
        return findItemById(this.contentItems, contentId);
    }
}