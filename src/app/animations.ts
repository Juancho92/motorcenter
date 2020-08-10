import { trigger, transition, animate, style, query, group, state, keyframes, animateChild } from '@angular/animations';

//Routable animations
export const multipleAnimations = {
    routeTrigger: trigger('routeAnimations', [
        transition('Main => Concesionario', [
            query(':enter, :leave', style({ position: 'fixed', width:'100%',height:'100%' })),
            query(':enter', style({ transform: 'translateY(100%)' })),
            
            group([
            query(':leave', [
                style({ transform: 'translateY(0%)' }),
                animate('1.0s ease-in-out', style({transform: 'translateY(-100%)'}))
            ]),
            query(':enter', [
                animate('1.0s ease-in-out', style({transform: 'translateY(0%)'})),
                animateChild()
            ])
            ]),
        ]),
        transition('Concesionario => Main', [
            query(':enter, :leave', style({ position: 'fixed', width:'100%',height:'100%' })),
            query(':enter', style({ transform: 'translateY(0%)' })),
            
            group([
            query(':leave', [
                style({ transform: 'translateY(-100%)' }),
                animate('1.0s ease-in-out', style({transform: 'translateY(0%)'}))
            ]),
            query(':enter', [
                animate('1.0s ease-in-out', style({transform: 'translateY(-100%)'})),
                animateChild()
            ])
            ]),
        ])
    ]),

    slideOneTrigger: trigger('slideInOut', [
        transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
        style({}),
        animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]),

    slideTwoTrigger: trigger('slideUpDown', [ 
        transition(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({}),
            animate('.3s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]),

    slideThreeTrigger: trigger('slideDownUp', [ 
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({}),
            animate('.5s ease-in-out', style({ transform: 'translateY(100%)' }))
        ])
    ]),

    fadeOneTrigger: trigger('fadeInOut', [ 
        transition(':enter', [
            style({ opacity: 0 }),
            animate('.7s ease-in-out', style({ opacity: 1}))
        ]),
        transition(':leave', [
            style({}),
            animate('.5s ease-in-out', style({ opacity: 0 }))
        ])
    ]),

    fadeTwoTrigger: trigger('fadeOut', [ 
        transition(':leave', [
            style({}),
            animate('.5s ease-in-out', style({ opacity: 0 }))
        ])
    ]),

    fadeThreeTrigger: trigger('fadeIn', [ 
        transition(':enter', [
          style({ opacity: 0 }),
          animate('.7s ease-in-out', style({ opacity: 1}))
        ])
    ]),

    bounceTrigger: trigger('bounceIn', [
        state('fall', style({})),
        transition('* => fall', [
            style({ transform: 'translateY(-100%)' }),
            animate('.7s ease-in-out', style({}))
        ]),
        state('bounce', style({})),
        transition('* => bounce', [
            animate('1s', keyframes([
            style({ transform: 'scale(1,1) translateY(0)' }),
            style({ transform: 'scale(1.1, 0.9) translateY(0)' }),
            style({ transform: 'scale(0.9, 1.1) translateY(-100px)' }),
            style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
            style({ transform: 'scale(1,1) translateY(-7px)' }),
            style({ transform: 'scale(1,1) translateY(0)' }),
            ]))
        ])
    ])
}