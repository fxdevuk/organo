import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social-icons'>
                <img className='social-items' src='./imagens/imagens 3/fb.png' alt='logo facebook'></img>
                <img className='social-items' src='./imagens/imagens 3/tw.png' alt='logo x twitter'></img>
                <img className='social-items' src='./imagens/imagens 3/ig.png' alt='logo instagram'></img>
            </div>
            <div className='logo-alura'>
                <img src='./imagens/imagens 3/logo.png' alt='logo alura'></img>
            </div>
            <div className='texto-footer'>
                <p>Desenvolvido por Alura</p>
            </div>
        </div>
    )
}

export default Footer
