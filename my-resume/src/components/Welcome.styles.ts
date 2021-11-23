import styled from 'styled-components';

export const Wrapper = styled.div `
    img {
        border-radius: 50%;
        width: 35%;
    }
    h1 {
        font-size: 5vw;
    }
    p {
        font-size: 3vw;
    }
`

/* Credit: https://css-tricks.com/snippets/css/typewriter-effect/ 23.11.21 */
export const TypeWriter = styled.div `

   .typewriter h1 {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .15em solid orange; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
    }

    /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: orange; }
    }
`