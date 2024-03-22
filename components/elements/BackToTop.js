
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <a className="scroll-to-top scroll-to-target d-block" href="#top">
                    <div className="scroll-bar-text"> Ir arriba </div>
                </a>
                
            )}
        </>
    )
}