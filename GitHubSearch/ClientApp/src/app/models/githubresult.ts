import { Item } from "./item";

export class GitHubResult {
    total_count: number;
    incomplete_results: boolean;
    items: Item[];
}
