export class Aliases{
    ///
    ///     FRANCHISE
    ///

    ///
    ///     ARTICLE
    ///
    public static articleCustomRoutes = {
        idCategorieArticle: "Categorie_Article",
        idFranchise: "Franchise",
        idArticle: "Article"    
    }
    public static articleConvivialNames = {
        idArticle: "Id",
        libelleArticle: "Libelle ",
        descriptionArticle: "Description",
        urlImgArticle: "Image",
        stockArticle: "Quantité en stock",
        prixArticleHt: "Prix unitaire HT",
        tva: "TVA",
        idCategorieArticle: "idCategorie",
        idFranchise: "idFranchise",
        estMenu: "Menu",
    }
    ///
    ///     CATEGORIE ARTICLE
    ///
    public static categorieArticleConvivialNames = {
        idCategorieArticle: "Id",
        libelleCategorieArticle: "Libelle",
    }

    ///
    ///     PROMOS
    ///    
    public static promosConvivialNames = {
        estActive: "Activer",
        idArticle: "idArticle",
        idPromo: "Id",
        libellePromo: "Libelle"
    }
    public static promosCustomRoutes = {
        idArticle: "Article",
    }
    
    ///
    ///     ROLE
    ///
    public static roleConvivialNames = {
        idRole: "Id",
        libelleRole: "Libelle",
    }

    ///
    ///     USER
    ///

    public static userConvivialNames = {
        idUtilisateur: 'Id',
        idRole: 'Role',
        idAdresseUtilisateur: 'Adresse',    
        nomUtilisateur: 'Nom',
        prenomUtilisateur: 'Prenom',
        numeroTelUtilisateur: 'Téléphone',
        emailUtilisateur: 'E-mail',
        mdpUtilisateur: 'Mot de passe',
    }

    public static userCustomRoutes = {
        idRole: 'Role',
        idAdresseUtilisateur: 'Adresse_Utilisateur',    
    }

}
