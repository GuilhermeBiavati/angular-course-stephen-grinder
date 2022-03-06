export interface Sortable {
    length: number;
    compare(leftIndex: number, rigthIndex: number): boolean;
    swap(leftIndex: number, rigthIndex: number): void;
}
export abstract class Sorter {

    abstract length: number;
    abstract compare(leftIndex: number, rigthIndex: number): boolean;
    abstract swap(leftIndex: number, rigthIndex: number): void;

    sort(): void {
        const { length } = this
        for (let index = 0; index < length; index++) {
            for (let j = 0; j < length - index - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}