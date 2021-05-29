export class Aliases{
    ///
    ///     FRANCHISE
    ///

    ///
    ///     ARTICLE
    ///
    public static articleCustomRoutes = {
        idCategorieArticle: 'Categorie_Article',
        idFranchise: 'Franchise',
        idArticle: 'Article'
    };

    public static articleConvivialNames = {
        idArticle: 'Id',
        libelleArticle: 'Libelle ',
        descriptionArticle: 'Description',
        urlImgArticle: 'Image',
        stockArticle: 'Quantité en stock',
        prixArticleHt: 'Prix unitaire HT',
        tva: 'TVA',
        idCategorieArticle: 'idCategorieArticle',
        idFranchise: 'idFranchise',
        estMenu: 'Menu',
        estActive: 'Actif',
    };
    ///
    ///     CATEGORIE ARTICLE
    ///
    public static categorieArticleConvivialNames = {
        idCategorieArticle: 'Id',
        libelleCategorieArticle: 'Libelle',
    };

    public static categorieArticleCustomRoutes = {
        idCategorieArticle: 'Categorie_Article',
    };
    ///
    ///     PROMOS
    ///
    public static promosConvivialNames = {
        estActive: 'Activer',
        idArticle: 'idArticle',
        idPromo: 'Id',
        libellePromo: 'Libelle'
    }
    public static promosCustomRoutes = {
        idArticle: 'Article',
        idPromo: 'Promo'
    };

    ///
    ///     USER
    ///

    public static userConvivialNames = {
        idUtilisateur: 'Id',
        role: 'role',
        idAdresseUtilisateur: 'idAdresseUtilisateur',
        nomUtilisateur: 'Nom',
        prenomUtilisateur: 'Prenom',
        numeroTelUtilisateur: 'Téléphone',
        emailUtilisateur: 'E-mail',
        mdpUtilisateur: 'Mot de passe',
    };

    public static userCustomRoutes = {
        idUtilisateur: 'User',
        idRole: 'Role',
        idAdresseUtilisateur: 'Adresse_Utilisateur',
    };

}
