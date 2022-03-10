import {FaLinkedinIn, FaDiscord, FaFacebook, FaGithub} from 'react-icons/fa'
import * as C from './style'
import balleriniLogo from '../../assets/Logo ballerini devs.svg'
export default function Header(){
    return(
       <C.Container>
           <C.Social>
               <a href='*'>
                <FaDiscord className='icon-fa'/>
               </a>
               <a href='*'>
                <FaFacebook className='icon-fa'/>
               </a>
               <a href='*'>
                <FaGithub className='icon-fa'/>
               </a>
               <a href='*'>
                <FaLinkedinIn className='icon-fa'/>
               </a>
           </C.Social>
           <C.Logo>
               <img src={balleriniLogo} alt='logo'/>
               <p>Ballerini Devs</p>
           </C.Logo>
       </C.Container> 
    )
}