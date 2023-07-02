import styled from "./../../../styles/button.module.css"
export default function Button({me}){
    return(
        <div>
            <button className={styled.button}>{me}</button>
        </div>
    );
}