import React from 'react';


const Cart = ({item}) => (
    
        <div className="col-md-4 mt-5 cartStyle">
            <div className="specialite">
                <h3 className="text-center">{item.fields.libelle_profession != null ? item.fields.libelle_profession : ""}</h3>
            </div>
            <div className="uni-shortcode-icons-box-5-default">
                <div className="item-icons-title">
                    <div className="col-md-4 uni-clear-padding">
                        <div className="item-icons">
                            <img src="images/icons_box/icon_4/icon-5.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-8 uni-clear-padding">
                        <div className="item-title text-center">
                            <h4 className="text-center">{item.fields.nom}</h4>
                        </div>
                    </div>
                </div>
                <div className="item-caption">
                        <address>
                            <i class="fas fa-map-marker-alt"></i>
                            {" " + item.fields.adresse}
                        </address>

                    {item.fields.telephone != null ? 
                    (<div>
                        <i className="fas fa-phone-square-alt"></i> 
                        <a href={"tel:" + item.fields.telephone}> {item.fields.telephone}</a>
                    </div>) 
                    : ""}

                </div>
            </div>
        </div>

)

export default Cart;


