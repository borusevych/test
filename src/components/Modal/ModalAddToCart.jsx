export default function ModalAddToCard(props) {
    return (
        <div className="modal-wrapper" onClick={props.onClose}>
            <div className="modal"  onClick={e => e.stopPropagation()}>
                <p>Add product “{props.item.name}”</p>
                <button className="modal__action" onClick={() => {
                    props.addToCart(props.item); 
                    props.onClose()
                    }}>ADD TO CART</button>
                <button className="modal__close"><img src="/images/cross.png" onClick={props.onClose}/></button>
            </div>
        </div>
    )
}
