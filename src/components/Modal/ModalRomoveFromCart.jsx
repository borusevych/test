export default function ModalRemoveFromCart(props) {
    return (
        <div className="modal-wrapper" onClick={props.onClose}>
            <div className="modal"  onClick={e => e.stopPropagation()}>
                <p>Remove product “{props.item.name}”</p>
                <button className="modal__action" onClick={() => {
                    props.removeFromCart(props.item); 
                    props.onClose()
                    }}>Remove from cart</button>
                <button className="modal__close"><img src="/images/cross.png" onClick={props.onClose}/></button>
            </div>
        </div>
    )
}