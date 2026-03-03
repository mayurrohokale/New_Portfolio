
export const fadeIn = (direction, delay) => {
    return {
         hidden: {
            opacity: 0,
            y: direction === 'up' ? 30 : direction  === 'down' ? -30 :  0,
            x: 0,
         },
         show : {
            y: 0,
            x:0,
             opacity: 1,
             transition: {
                type: 'tween',
                duration: 0.5,
                 delay: delay,
                 ease: [0.25, 0.25,0.25,0.75],
             }
         }
    }
}