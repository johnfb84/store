import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CounterComponent } from "@shared/components/counter/counter.component";
import { WaveAudioComponent } from './../../components/wave-audio/wave-audio.component'
import { HighlightDirective } from '@shared/directives/highlight.directive';


@Component({
  selector: 'app-about',
  imports: [CounterComponent, CommonModule, WaveAudioComponent, HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000)
  message = signal('hola')

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement
    this.duration.set(input.valueAsNumber)
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement
    this.message.set(input.value)
  }

}
