import { Injectable } from '@angular/core';
import { animation, style, animate, AnimationBuilder, AnimationMetadata } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor(private builder: AnimationBuilder) { }

  private fadeInOut(): AnimationMetadata[] {
    return [
      style({ height: 0 }), // Startzustand
      animate('300ms', style({ height: 50 })), // Endzustand
    ];
  }

 public createFadeInOutAnimation(element: any) {
    const metadata = this.fadeInOut();
    const factory = this.builder.build(metadata);
    const player = factory.create(element);
    player.play();
  }
}
