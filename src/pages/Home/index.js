import {Link} from 'react-router-dom'
import * as C from './style'
export default function Home(){
    return(
        <C.Container>
            <C.StartNow>
                <h1>O maior banco de devs do Brasil</h1>
                <p>Nao importa se front ou back end,  fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
                <Link to="/devs">Entrar</Link>
            </C.StartNow>
        </C.Container>
    )
}