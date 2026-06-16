abstract class Course {
    public title: string;
    public duration: number;

    constructor(title: string, duration: number) {
        this.title = this.validateTitle(title);
        this.duration = this.validateDuration(duration);
    }

    protected validateTitle(val: string): string {
        const trimmed = val.trim();
        if (trimmed.length === 0) {
            throw new Error('Title cannot be empty');
        }
        return trimmed;
    }

    protected validateDuration(val: number): number {
        if (!Number.isInteger(val) || val < 1) {
            throw new Error('Duration must be a positive integer (hours)');
        }
        return val;
    }

    abstract getDescription(): string;
}

class ProgrammingCourse extends Course {
    public language: string;

    constructor(title: string, duration: number, language: string) {
        super(title, duration);
        this.language = this.validateLanguage(language);
    }

    protected validateLanguage(val: string): string {
        const trimmed = val.trim();
        if (trimmed.length < 2) {
            throw new Error('Programming language must be at least 2 characters long');
        }
        return trimmed;
    }

    override getDescription(): string {
        return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`;
    }
}

class DesignCourse extends Course {
    public tools: string[];

    constructor(title: string, duration: number, tools: string[]) {
        super(title, duration);
        this.tools = this.validateTools(tools);
    }

    protected validateTools(val: string[]): string[] {
        if (!Array.isArray(val)) {
            throw new Error('Tools must be an array');
        }

        const cleaned = val.map(v => v.trim()).filter(v => v.length > 0);
        if (cleaned.length === 0) {
            throw new Error ('At least one tool must be specified');
        }
        return cleaned;
    }

    override getDescription(): string {
        return `Design Course: ${this.title} using ${this.tools.join(', ')} - ${this.duration} hours`;
    }
}

const jsCourse = new ProgrammingCourse("Intro to JavaScript", 40, "JavaScript");
const uiCourse = new DesignCourse("UX Fundamentals", 30, ["Figma", "Sketch"]);
console.log(jsCourse.getDescription());
console.log(uiCourse.getDescription());