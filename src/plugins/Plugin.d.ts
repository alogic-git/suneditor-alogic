export interface Plugin {
    name: string;
    display: string;
    add: (core: any, targetElement?: any) => void;
    active?: (element: any) => boolean;
    title?: string,
    innerHTML?: string,
    buttonClass?: string
}