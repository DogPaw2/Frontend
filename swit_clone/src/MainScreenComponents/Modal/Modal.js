import react from 'react';
import "./Modal.css";

const ChannelCreateModal = ( props ) => {
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        채널 생성
                    </header>
                    <main>
                        <div className= "section1">
                            <div>채널 이름</div>
                            <input type= "text"></input>
                        </div>
                        <div className = "section1">
                            <div>설명 (선택사항)</div>
                            <input type= "text"></input>
                        </div>

                    </main>
                    <footer>
                        <button className="close" onClick={close}> 취소 </button>
                        <button className="close" onClick={close}> 확인 </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default ChannelCreateModal;