import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required:true}) duration = 0
  @Input({required: true}) message = ''

  constructor(){
    //Not async
    // before render
    console.log('constructor')
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges')
    console.log('-'.repeat(10))
    console.log(changes)
  }

  ngOnInit() {
    // after renderApplication, only one time. async, the subs
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngOnInit')
    console.log('-'.repeat(10))
    console.log('duration -> ', this.duration)
    console.log('message -> ', this.message)
  }

  ngAfterViewInit() {
    // after render. If child components were rendered
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit')
    console.log('-'.repeat(10))
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy')
    console.log('-'.repeat(10))
  }

}
