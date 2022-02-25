import * as C from './style';
import { useHistory} from 'react-router-dom'

export default function Home(){

    const history = useHistory()
    
    function handleDev(){
        history.push('/devs')
    }

    return(
        <C.Container>
            <C.StartNow>
                <h1>O maior banco de devs do Brasil</h1>
                <p>Nao importa se front ou back end,  fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
                <C.Button onClick={handleDev}>Entrar</C.Button>
            </C.StartNow>
        </C.Container>
    )
}