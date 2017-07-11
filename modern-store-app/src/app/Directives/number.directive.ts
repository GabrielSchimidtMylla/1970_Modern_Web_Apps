import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[number]'
})
export class NumberDirective {
    private regexStr: RegExp = new RegExp("[^0-9]+","g");

    constructor(private element: ElementRef) {
    }

    @Input() NumberDirective: boolean;

    @HostListener("keydown", ["$event"]) onkeydown(event) {
        let e = <KeyboardEvent>event;
        if ([8, 9, 37, 39, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105].indexOf(e.keyCode) === -1) {
            e.preventDefault();
            return;
        }
    };

    @HostListener("keyup", ["$event"]) onkeyup(event) {
        let val = this.element.nativeElement.value.replace(this.regexStr, "");
        
        if (val.length === 4)
            this.element.nativeElement.value = val.substr(0, 3) + '.' + val.substr(3, 1);
        if (val.length === 7)
            this.element.nativeElement.value = val.substr(0, 3) + '.' + val.substr(3, 3) + '.' + val.substr(6, 1);
        if (val.length === 10)
            this.element.nativeElement.value = val.substr(0, 3) + '.' + val.substr(3, 3) + '.' + val.substr(6, 3) + '-' + val.substr(9, 2);
    };
}

