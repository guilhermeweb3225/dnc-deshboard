import styled from 'styled-components'
const LoginArea = styled.div `
background-color: gray;
`
const LoginImage=styled.div`
background-image: url(/img-Login.svg);
background-size: cover;
width: 50%;
height: 100vh;
`
function Registration(){
    return (
    <>
        <LoginArea>
        <LoginImage/>
        </LoginArea>
    </>
    )
}
export default Registration