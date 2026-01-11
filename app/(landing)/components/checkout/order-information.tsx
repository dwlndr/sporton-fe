import CardWithHeader from "../ui/card-with-header"

const OrderInformation = () => {
  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="full_name">Full Name</label>
          <input type="text" name="full_name" id="full_name" placeholder="Type your full name" />
        </div>
        <div className="input-group">
          <label htmlFor="whatsapp_number">Whatsapp Number</label>
          <input type="text" name="whatsapp_number" id="whatsapp_number" placeholder="Type your whatsapp number" />
        </div>
        <div className="input-group">
          <label htmlFor="shipping_address">Shipping Address</label>
          <textarea name="shipping_address" id="shipping_address" placeholder="Type your shipping address" rows={7} />
        </div>
      </div>
    </CardWithHeader>
  )
}

export default OrderInformation