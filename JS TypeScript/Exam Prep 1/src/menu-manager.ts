import { BaseMenuItem, findItemById } from "./menu-item-types";
import { Client, MenuItemType } from "./models";

export class MenuManager {
    private menuItems: BaseMenuItem[] = [];
    private clients: Map<number, Client[]> = new Map();

    addMenuItem(item: BaseMenuItem): string {
        this.menuItems.push(item);
        this.clients.set(item.id, []);
        return `Menu item "${item.name}" (ID: ${item.id}) has been added.`;
    }

    registerClient(itemId: number, client: Client): string {
        if (!this.menuItems.some(item => item.id === itemId)) {
            return `ERROR: Menu item with ID ${itemId} not found.`;
        }
        this.clients.get(itemId)!.push(client);
        return `Client ${client.name} registered for menu item ID ${itemId} successfully.`;
    }

    listAllItems(): string[] {
        const result: string[] = ['--- List of All Menu Items ---'];

        for (const item of this.menuItems) {
            const typeStr = MenuItemType[item.type].toLocaleUpperCase();
            const cals = item.getCalories().toFixed(2);

            const line = `[${typeStr}] ${item.name} (${item.weightGrams}g) - Calories: ${cals}`;

            result.push(line);
        }
        return result;
    }

    findMenuItem(itemId: number): BaseMenuItem | undefined {
        return findItemById(this.menuItems, itemId);
    }
}