export default function Preloader() {
  return (
    <>
      <div className="loader-wrap">
        <div className="preloader">
          <div className="preloader-close">close</div>
          <div id="handle-preloader" className="handle-preloader">
            <div className="animation-preloader">
              <div className="spinner"></div>
              <div className="txt-loading">
                <span data-text-preloader="F" className="letters-loading">
                  F
                </span>
                <span data-text-preloader="E" className="letters-loading">
                  E
                </span>
                <span data-text-preloader="G" className="letters-loading">
                  G
                </span>
                <span data-text-preloader="A" className="letters-loading">
                  A
                </span>
                <span data-text-preloader="M" className="letters-loading">
                  M
                </span>
                <span data-text-preloader="E" className="letters-loading">
                  E
                </span>
                <span data-text-preloader="X" className="letters-loading">
                  x
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
