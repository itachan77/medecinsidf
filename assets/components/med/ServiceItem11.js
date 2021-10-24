import React from 'react';



const ServiceItem = ({item, error}) => {
    // {item.fields.nom_dep}
    // <div>
    // {item.fields.record_timestamp == null ? "est indéfini" : item.fields.record_timestamp}
    // </div>
    
    
    /*
    actes: "Ablation et/ou fragmentation de calcul de l'uretère pelvien,par urétéroscopie rétrograde,Cure de hernie de la paroi abdominale antérieure après l'âge de 16 ans avec pose de prothèse,par cœlioscopie,Exérèse de petite glande salivaire [glande salivaire accessoire],Coloscopie totale avec visualisation du bas-fond cæcal,sans franchissement de l'orifice iléocolique,Urétéro-pyélo-caliscopie rétrograde,par voie urétrale,Incision d'abcès de la région anale,Exérèse primitive de ptérygion,avec autogreffe de conjonctive ou de muqueuse,Adénoïdectomie avec myringotomie unilatérale ou bilatérale,Arthrodèse intercorporéale de la colonne vertébrale avec arthrodèse postérieure,par abord postérolatéral,Section ou plastie du frein du prépuce du pénis,Adénoïdectomie,Adénoïdectomie avec pose bilatérale d'aérateur transtympanique,Réduction orthopédique d'une luxation de prothèse de l'articulation coxofémorale,Reconstruction du ligament croisé antérieur du genou par autogreffe,par arthroscopie,Urétrotomie,par endoscopie,Résection d'une hydrocèle abdominoscrotale,par laparotomie ou par abord inguinal,Extraction extracapsulaire du cristallin par phakoémulsification,avec implantation de cristallin artificiel dans la chambre postérieure de l'œil,Libération,incisions axiales ou ténosynovectomie d'un tendon de l'arrière-pied,Échoendoscopie biliopancréatique sans biopsie,Cure bilatérale d'une hernie de l'aine avec pose de prothèse,par vidéochirurgie,Abrasion de la muqueuse de l'utérus [Endométrectomie],par hystéroscopie,Cure unilatérale d'une hernie de l'aine avec pose de prothèse,par vidéochirurgie,Réinsertion du tendon calcanéen [d'Achille],par abord direct,Sinusotomie maxillaire,par abord de la fosse canine [abord vestibulaire],Ténosynovectomie des muscles extenseurs au poignet,par abord direct,Remplacement de l'articulation coxofémorale par prothèse totale,avec renfort métallique acétabulaire,Ostéotomie du métatarsien et de la phalange proximale du premier rayon du pied,avec libération mobilisatrice de l'articulation métatarsophalangienne du premier orteil,Évacuation de collection de la glande mammaire,par abord direct,Mastectomie partielle,Libération de l'uretère sans intrapéritonisation,par cœlioscopie ou par rétropéritonéoscopie,Posthectomie,Cure d'éventration postopératoire de la paroi abdominale antérieure avec pose de prothèse,par cœlioscopie,Mastectomie partielle avec curage lymphonodal axillaire,Résection rectosigmoïdienne avec anastomose colorectale infrapéritonéale,par cœlioscopie ou par laparotomie avec préparation par cœlioscopie,Exérèse de lésion superficielle de la peau par excision d'une zone cutanée de 10 cm² à 50 cm²,Ostéosynthèse de fracture ou de décollement épiphysaire de l'extrémité distale d'un os de l'avant-bras par broche,à foyer fermé,Exérèse bilatérale de gynécomastie,Exérèse d'une hernie discale de la colonne vertébrale lombale,par abord postérieur ou postérolatéral,Libération du nerf médian au canal carpien,par abord direct,Mise à plat d'abcès et/ou de fistule intersphinctérien haut [intramural] de l'anus,Septoplastie nasale,Exérèses multiples de branches de la grande veine saphène et/ou de la petite veine saphène sous anesthésie générale ou locorégionale,par abord direct,Exérèse de 1 à 3 polypes de moins de 1cm de diamètre du côlon et/ou du rectum,par coloscopie totale,Changement de la pièce acétabulaire ou fémorale d'une prothèse totale de hanche,sans reconstruction osseuse,Réduction de procidence hémorroïdaire interne par agrafage circulaire,par voie anale,Résection de 4 tumeurs de la vessie ou plus,par endoscopie,Réparation de perte de substance de l'extrémité céphalique par lambeau local ou régional muqueux,cutané ou fasciocutané,à pédicule vasculonerveux non individualisé ou non individualisable [lambeau \"au hasard\"],Exérèse de lésion fasciale et/ou sousfasciale des tissus mous,sans dissection d'un gros tronc vasculaire ou nerveux,Exérèse d'un polype de plus de 1cm de diamètre ou de 4 polypes ou plus du côlon et/ou du rectum,par coloscopie totale,Pose d'une endoprothèse urétérale,par endoscopie rétrograde,Cure de hernie de la paroi abdominale antérieure après l'âge de 16 ans sans pose de prothèse,par abord direct,Libération de nerf digital par abord direct,sur un rayon de la main,Salpingectomie totale,par cœlioscopie,Cure d'éventration postopératoire de la paroi abdominale antérieure sans pose de prothèse,par abord direct,Réparation de perte de substance par lambeau local ou régional muqueux,cutané ou fasciocutané,à pédicule vasculonerveux non individualisé ou non individualisable [lambeau \"au hasard\"],en dehors de l'extrémité céphalique,Plastie du prépuce du pénis [Posthoplastie],Excision de lésion infectieuse diffuse de la peau et des tissus mous sur moins de 50 cm²,Cholécystectomie,par cœlioscopie,Ligature de plusieurs veines perforantes jambières,par abord direct,Excision d'un sinus pilonidal périnéofessier,Interruption unilatérale ou bilatérale de la perméabilité des trompes utérines,par cœlioscopie,Exérèse de lésion fasciale et/ou sousfasciale des tissus mous de la racine d'un membre,du pli du coude ou du creux poplité,Biopsie de la prostate,par voie transrectale avec guidage échographique,Coloscopie totale,avec franchissement de l'orifice iléocolique,Court-circuit [Bypass] gastrique pour obésité morbide,par cœlioscopie,Remplacement de l'articulation du genou par prothèse tricompartimentaire sur une déformation inférieure ou égale à 10° dans le plan frontal,Pose d'un cathéter relié à une veine profonde du membre supérieur ou du cou par voie transcutanée,avec pose d'un système diffuseur implantable souscutané,Ablation et/ou fragmentation de calcul de l'uretère lombal,par urétéroscopie rétrograde,Cure de hernie de la paroi abdominale antérieure avant l'âge de 16 ans,par abord direct,Gastrectomie longitudinale [Sleeve gastrectomy] pour obésité morbide,par cœlioscopie,Recalibrage unilatéral de la colonne vertébrale lombale ou lombosacrale,par abord postérieur,Recalibrage bilatéral de la colonne vertébrale lombale ou lombosacrale,par abord postérieur,Séance de mucosectomie rectocolique,par endoscopie,Ablation de matériel d'ostéosynthèse des membres sur un site,par abord direct,Appendicectomie,par cœlioscopie ou par laparotomie avec préparation par cœlioscopie,Exérèse de lésion de la peau du pénis,du gland et/ou du sillon balanopréputial,sous anesthésie générale ou locorégionale,Ostéotomie d'un métatarsien latéral ou d'une phalange d'orteil,sur un rayon du pied,Remplacement de l'articulation coxofémorale par prothèse totale,Endoscopie œso-gastro-duodénale,Méniscectomie latérale ou médiale du genou,par arthroscopie,Hystérectomie totale,par cœlioscopie"
    adresse: "CABINET DU DR CHANTAL LAUBREAUX CHP SAINTE MARIE 1 RUE CHRISTIAN BARNARD  95520 OSNY"
    ccam_phase: "LMMA0100,JCGE0010,NFMC0030,LMMC0200,HHFE0060,EGED0010,JCGE0060,NEKA0090,JJPC0030,PDFA0010,AHPA0280,LHDA0020,NDPA0040,PDFA0030,HHFE0020,LFAA0020,QEJA0010,QZFA0110,FAFA0130,HKPA0050,QZFA0380,JHFA0090,HEQE0020,NEKA0140,QEFA0020,MJFA0040,JEPE0020,HMQJ0010,LFFA0020,HKPA0060,NFFC0040,JJFC0060,NJEA0030,JCLE0020,QEFA0170,QEFA0080,BCFA0030,FAFA0020,HFFC0180,BFGA0040,JHMA0010,JHFA0190,EBLA0030,HHQE0050,NFKA0070,LFAA0010,HHQE0020,QZMA0010,JBQE0010,LMMC0010,JKNE0010,LMMC0020,HFCC0030,JDFE0010,JCPC0020,GBPA0040,JHFA0180,HMFC0040,HJFA0040,JHPA0010,NEEP0020,NEKA0200,FAFA0080,HHFE0040,QAMA0020,JKFC0050,JGHJ0010,LMMA0140,NJPA0180,EJFA0020,NDPA0110,QBFA0070,LMMC0150,HHFA0160,GAMA0070,PAGA0110,MCCB0040,LMMA0090,AHPA0090,EJSA0010,HCFA0070"
    civilite: "Femme"
    code_insee: "95476"
    code_postal: "95520"
    code_profession: 3
    codes_ccam: "BFGA004,QBFA007,JKNE001,EJFA002,AHPA009,HFFC018,EJSA001,MCCB004,LMMC002,HHQE002,JDFE001,HFCC003,JGHJ001,QAMA002,LMMA014,HKPA006,HMFC004,NFFC004,HKPA005,QEFA002,LMMA009,JBQE001,LFAA002,QZFA011,NEKA009,JCPC002,NEKA014,JHFA019,JCLE002,HHFE002,NJPA018,FAFA013,QEFA008,JHPA001,GAMA007,LFAA001,LHDA002,NDPA004,HHQE005,HCFA007,NDPA011,NEEP002,FAFA008,BCFA003,JJPC003,LMMC020,JKFC005,LMMC015,JCGE001,GBPA004,QEFA017,FAFA002,JHMA001,LMMA010,QZMA001,EBLA003,HHFA016,QEJA001,HEQE002,HMQJ001,HHFE004,PDFA001,EGED001,HHFE006,NFMC003,JEPE002,HJFA004,NFKA007,AHPA028,PAGA011,PDFA003,LMMC001,MJFA004,JHFA018,LFFA002,NJEA003,JCGE006,JHFA009,QZFA038,NEKA020,JJFC006"
    convention: "Secteur 1 ou conventionné"
    coordonnees: (2) [49.073939, 2.075184]
    libelle_profession: "Anesthésiste réanimateur"
    nature_exercice: "Libéral temps partiel hospitalier"
    nom: "CHANTAL LAUBREAUX FAVRAUD"
    nom_com: "Osny"
    nom_dep: "VAL-D'OISE"
    nom_epci: "CA de Cergy-Pontoise"
    nom_reg: "ILE-DE-FRANCE"
    sesam_vitale: "Lecteur de carte Sesam Vitale"
    telephone: "01.34.20.96.96"
    types_actes: "Actes de chirurgie,Actes d'anesthésie,Actes techniques médicaux (hors imagerie)"
    */
    
    
    if (item.fields != undefined) {
     
return <div id="wrapper-container" className="site-wrapper-container mx-auto">
    
            <div id="main-content" className="site-main-content uni-background-1">
                <section className="site-content-area">
                    <div className="uni-services-body">
    
                        <div className="uni-our-services-2">
                            <div className="container uni-our-services-2">
    
                                <div className="mb-2 specialite">
                                    <div className="card-text h2 p-1 text-center">
                                        <div className="text-danger h5 text-center mt-1">Nom, {error} spécialité et nature de l'exercice du médecin {item.length}:</div>
                                        {item.fields.nom} - {item.fields.libelle_profession != null ? item.fields.libelle_profession : ""} - {item.fields.nature_exercice != null ? item.fields.nature_exercice : ""}
                                    </div>
                                    <div className="ml-2 pb-3 text-center"> Convention : {item.fields.convention}</div>
                                </div>
    
                                <div className="uni-our-service-2-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="tab-nav">
                                                <ul className="nav-pills nav-stacked">
                                                    <li className="active"><a href={"#tab_a" + item.recordid} data-toggle="pill">Carte et Adresse</a></li>
                                                    <li><a href={"#tab_b" + item.recordid} data-toggle="pill">Actes pratiqués</a></li>
                                                    <li><a href={"#tab_d" + item.recordid} data-toggle="pill">Renseignements divers</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="tab-content">
                                                <div className="tab-pane active" id={"tab_a" + item.recordid}>
                                                    <div className="uni-our-service-2-content-default">
                                                        <div className="row">
                                                            <div className="col-md-5 mapouter gmap_canvas mx-auto">
                                                                <iframe width="300" height="200" id="gmap_canvas" src={"https://maps.google.com/maps?q=" + item.fields.adresse + "&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameBorder="1" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                                            </div>
                                                            <div className="col-md-7 pl-5">
                                                                <div className="item-caption row">
                                                                    <div className="item-caption-title col-sm-12">
                                                                        <h3>ADRESSE</h3>
                                                                        <div className="uni-line"></div>
                                                                        <div>{item.fields.adresse}</div>
                                                                    </div>
                                                                    
                                                                    <div className="item-caption-title col-sm-12">
                                                                        {item.fields.telephone != null ? 
                                                                            (<div>
                                                                                <div className="item-caption-title">
                                                                                    <h3>TEL.</h3>
                                                                                    <div className="uni-line"></div>
                                                                                </div>
                                                                                <i className="fas fa-phone-square-alt"></i> 
                                                                                <a href={"tel:" + item.fields.telephone}> {item.fields.telephone}</a>
                                                                            </div>) 
                                                                        : ""}
                                                                    </div>

                                                                </div>

                                                                <div className="mx-auto mb-3">
                                                                    <button className="btn btn-primary mx-auto"><a className="text-white" target="_blank" href={"https://www.doctolib.fr/doctors/" + item.fields.nom}>VOIR LE MEDECIN SUR DOCTOLIB</a></button>
                                                                </div>

                                                            </div>
                                                                    
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div className="tab-pane" id={"tab_b" + item.recordid}>
                                                    <div className="uni-our-service-2-content-default">
                                                        <div className="row">
      
                                                            <div className="col-md-12">
                                                                <div className="item-caption">
                                                                    <div className="item-caption-title mt-3">
                                                                        <h3>ACTES PRATIQUES</h3>
                                                                        <div className="uni-line"></div>
                                                                    </div>
                                                                    
                                                                    {item.fields.actes != null ?
                                                                    <div>
                                                                        <span className="text-primary h4">Actes</span>
                                                                        <div className="mb-4 actes">{item.fields.actes}</div>
                                                                    </div>
                                                                    : ""
                                                                    }
                                                                    
                                                                     
                                                                    {item.fields.types_actes != null ?  
                                                                    <div>
                                                                        <span className="text-primary h4">Type</span>
                                                                        <div className="actes">{item.fields.types_actes}</div>
                                                                        
                                                                    </div>
                                                                    
                                                                    : <span className="text-primary h4">Aucun acte renseigné.</span> }  
    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div className="tab-pane" id={"tab_d" + item.recordid}>
                                                    <div className="uni-our-service-2-content-default">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="item-caption">
                                                                    <div className="item-caption-title mt-3">
                                                                        <h3>INFORMATIONS DIVERSES</h3>
                                                                        <div className="uni-line"></div>
                                                                    </div>
                                                                        <li className="list-group-item">
                                                                        <div className="text-white mb-2 p-1 informationsdiverses">Informations diverses </div>
                                                                        <div>{item.fields.sesam_vitale}</div>
                                                                        <div>Code profession : {item.fields.code_profession}</div>
                                                                        </li>
    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
    
    
                            </div>
                        </div>
    
                    </div>
                </section>
            </div>
            
        </div>
    
    }
    else if (item == undefined) {
        return <p>rien</p>
    }


}

export default ServiceItem;


    
 
            



