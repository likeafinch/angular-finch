import { trigger, stagger, animate, style, group, query, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '40vw', height: '100%', top:0, left:0 })
            , { optional: true }),
        query('.block', style({ opacity: 0 })
            , { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.7s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.7s ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0.3 }))
            ], { optional: true }),
        ]),
        query(':enter .block', stagger(400, [
            style({ transform: 'translateY(100px)' }),
            animate('1s ease-in-out', style({ transform: 'translateY(0px)', opacity: 1 })),
        ]), { optional: true }),
    ])
]);
