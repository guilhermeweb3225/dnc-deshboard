import styled from 'styled-components'
const Universal= styled.body`
margin: 0;
padding: 0;
box-sizing: border-box;
`
const LoginArea = styled.div `
background-color: gray;
`
const LoginImage=styled.div`
background-image: url(/img-Login.svg);
background-size: cover;
width: 50%;
height: 100%;
`
function Login(){
    return (
    <Universal>
        <LoginArea>
        <LoginImage/>
        </LoginArea>
    </Universal>
    )
}
export default Login