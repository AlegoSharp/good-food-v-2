export class Aliases{
    ///
    ///     ADRESSE FOURNISSEUR
    ///
    public static  adresseFournisseurCustomRoutes = {
        idAdresse: 'Adresse_Fournisseur',
        idTiers: 'Fournisseur'
    }

    public static adresseFournisseurConvivialNames = {
        idAdresse: 'Id',
        idTiers: 'idTiers',
        codePostal: 'Code postal',
        nomAdresse: 'Nom',
        numeroAdresse: 'Numéro',
        pays: 'Pays',
        suppNomAdresse: 'Supplément nom',
        villeAdresse: 'Ville',
        estActive: 'Active'
    }

    ///
    ///     ADRESSE UTILISATEUR
    ///
    public static  adresseUtilisateurCustomRoutes = {
        idAdresse: 'Adresse_Utilisateur',
        idUtilisateur: 'Utilisateur'
    }

    public static adresseUtilisateurConvivialNames = {
        idAdresse: 'Id',
        idUtilisateur: 'idUtilisateur',
        codePostal: 'Code postal',
        nomAdresse: 'Nom',
        numeroAdresse: 'Numero',
        pays: 'Pays',
        suppNomAdresse: 'Supplément',
        villeAdresse: 'Ville',
        estActive: 'Active'
    }
    
    ///
    ///     ALLERGENES
    ///
    public static  allergeneCustomRoutes = {
        idAllergene: 'Allergene'
    }

    public static allergeneConvivialNames = {
        idAllergene: 'Id',
        libelleAllergene: 'Libellé'
    }  

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
        libelleArticle: 'Libellé',
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
    public static categorieArticleCustomRoutes = {
        idCategorieArticle: 'Categorie_Article',
    };

    public static categorieArticleConvivialNames = {
        idCategorieArticle: 'Id',
        libelleCategorieArticle: 'Libellé',
    };

    ///
    ///     COMMANDE
    /// 
    public static commandeCustomRoutes = {
        idCommande: 'Commande',
        idUtilisateur: 'Utilisateur',
        idAdresseLivraison: 'Adresse_Utilisateur',
        idAdresseFacturation: 'Adresse_Utilisateur',
        idFranchise: 'Franchise'
    }
    public static commandeConvivialNames = {
        idCommande: 'Id',
        dateCommande: 'Date',
        statutCommande: 'Statut',
        totalTTC: 'Total TTC',
        idAdresseLivraison: 'idAdresseLivraison',
        idAdresseFacturation: 'idAdresseFacturation',
        idUtilisateur: 'idUtilisateur',
        idFranchise: 'idFranchise',
        estActive: 'Active'
    };

    ///
    ///     FOURNISSEUR
    ///
    public static fournisseurCustomRoutes = {
        idFournisseur: 'Fournisseur',
        idFranchise: 'Franchise',
        adresseFournisseur: 'Adresse_Fournisseur'
    }
    public static fournisseurConvivialNames = {
        idFournisseur: 'Id',
        idFranchise: 'idFranchise',
        nomFournisseur: 'Nom',
        numeroSiretFournisseur: 'Siret',
        emailFournisseur: 'E-mail',
        numeroTelFournisseur: 'Téléphone',
        adresseFournisseur: 'adresseFournisseur',
        estActive: 'Actif'
    };

    ///
    ///     FRANCHISE
    ///
    public static franchiseCustomRoutes = {
        idFranchise: 'Franchise',
        idGroupeFranchise: 'Groupe_Franchise'
    }
    public static franchiseConvivialNames = {
        idFranchise: 'Id',
        idGroupeFranchise: 'idGroupeFranchise',
        nomFranchise: 'Nom',
        numeroSiretFranchise: 'Siret',
        emailFranchise: 'E-mail',
        numeroTelFranchise: 'Téléphone',
        estActive: 'Active'
    };

    ///
    ///     GROUPE FRANCHISE
    ///
    public static groupeFranchiseCustomRoutes = {
        idGroupeFranchise: 'Groupe_Franchise'
    }
    public static groupeFranchiseConvivialNames = {
        idGroupeFranchise: 'Id',
        nomGroupeFranchise: 'Nom',
        estActive: 'Actif'
    };

    ///
    ///     LIGNE COMMANDE
    ///
    public static ligneCommandeCustomRoutes = {
        idLigneCommande: 'Ligne_Commande',
        idCommande: 'Commande',
        idArticle: 'Article'
    }
    public static ligneCommandeConvivialNames = {
        idLigneCommande: 'Id',
        idCommande: 'idCommande',
        idArticle: 'idArticle',
        quantiteArticle: 'Quantite',
        sousTotalTTC: 'Sous-total TTC',
        estActive: 'Active'
    };

    ///
    ///     PROMOS
    ///
    public static promosCustomRoutes = {
        idPromo: 'Promo',
        idArticle: 'Article'
    };
    public static promosConvivialNames = {
        idArticle: 'idArticle',
        idPromo: 'Id',
        libellePromo: 'Libellé',
        reduction: 'Réduction (en %)',
        estActive: 'Active'
    }

    ///
    ///     UTILISATEUR
    ///
    public static userCustomRoutes = {
        idUtilisateur: 'Utilisateur',
        idFranchise: 'Franchise',
        idAdresseFacturation: 'Adresse_Utilisateur',
        idAdresseLivraison: 'Adresse_Utilisateur',
    };
    public static userConvivialNames = {
        idUtilisateur: 'Id',
        emailUtilisateur: 'E-mail',
        mdpUtilisateur: 'Mot de passe',
        idAdresseFacturation: 'Adresse de facturation',
        idAdresseLivraison: 'Adresse de livraison',
        nomUtilisateur: 'Nom',
        prenomUtilisateur: 'Prenom',
        numeroTelUtilisateur: 'Téléphone',
        role: 'role',
    };
}
