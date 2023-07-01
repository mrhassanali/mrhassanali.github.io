import "./ContentList.css";
import { HashLink } from 'react-router-hash-link';

export default function ContentList(props) {
    return (
            <li className="item">
                <i className="left-icon far fa-circle"></i>
                {
                    
                    props.data.link
                        ? <HashLink smooth to={props.data.link} title={props.data.name}>
                            <div className="sub-item" dangerouslySetInnerHTML={{ __html: props.data.name }} />
                        </HashLink>
                        : <HashLink smooth to={props.data.Tolink} title={props.data.name}>
                            <div className="sub-item" dangerouslySetInnerHTML={{ __html: props.data.name }} />
                        </HashLink>
                }
            </li>
    )
}


// import "./ContentList.css";

// export default function ContentList(props) {
//     return (
//         <li className="item">
//             <i className="left-icon far fa-circle"></i>
//             <a href={props.data.link} title="">
//                 <div dangerouslySetInnerHTML={{ __html: props.data.name }} />
//             </a>
//         </li>
//     )
// }