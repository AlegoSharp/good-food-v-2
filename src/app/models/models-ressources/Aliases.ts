export class Aliases{
    ///
    ///     ADRESSE FOURNISSEUR
    ///
    public static  adresseFournisseurCustomRoutes = {
        a_idAdresse: 'Adresse_Fournisseur',
        b_idTiers: 'Fournisseur'
    };

    public static adresseFournisseurConvivialNames = {
        a_idAdresse: 'Id',
        b_idTiers: 'idTiers',
        c_codePostal: 'Code postal',
        d_nomAdresse: 'Nom',
        e_numeroAdresse: 'Numéro',
        f_pays: 'Pays',
        g_suppNomAdresse: 'Supplément nom',
        h_villeAdresse: 'Ville',
        i_estActive: 'Active'
    };

    ///
    ///     ADRESSE UTILISATEUR
    ///
    public static  adresseUtilisateurCustomRoutes = {
        a_idAdresse: 'Adresse_Utilisateur',
        b_idUtilisateur: 'Utilisateur'
    };

    public static adresseUtilisateurConvivialNames = {
        a_idAdresse: 'Id',
        b_idUtilisateur: 'idUtilisateur',
        c_codePostal: 'Code postal',
        d_nomAdresse: 'Nom',
        e_numeroAdresse: 'Numero',
        f_pays: 'Pays',
        g_suppNomAdresse: 'Supplément',
        h_villeAdresse: 'Ville',
        i_estActive: 'Active'
    };

    ///
    ///     ALLERGENES
    ///
    public static  allergeneCustomRoutes = {
        a_idAllergene: 'Allergene'
    };

    public static allergeneConvivialNames = {
        a_idAllergene: 'Id',
        b_libelleAllergene: 'Libellé',
        c_estActive: 'Actif'
    };

    ///
    ///     ARTICLE
    ///
    public static articleCustomRoutes = {
        a_idArticle: 'Article',
        b_idCategorieArticle: 'Categorie_Article',
        c_idFranchise: 'Franchise'
    };

    public static articleConvivialNames = {
        a_idArticle: 'Id',
        b_idCategorieArticle: 'idCategorieArticle',
        c_idFranchise: 'idFranchise',
        d_libelleArticle: 'Libellé',
        e_descriptionArticle: 'Description',
        f_urlImgArticle: 'Image',
        g_prixArticleHt: 'Prix unitaire HT',
        h_tva: 'TVA',
        i_estMenu: 'Menu',
        j_estActive: 'Actif',
        k_stockArticle: 'Quantité en stock',
    };

    ///
    ///     CATEGORIE ARTICLE
    ///
    public static categorieArticleCustomRoutes = {
        a_idCategorieArticle: 'Categorie_Article',
    };

    public static categorieArticleConvivialNames = {
        a_idCategorieArticle: 'Id',
        b_libelleCategorieArticle: 'Libellé',
        c_estActive: 'Active'
    };

    ///
    ///     COMMANDE
    ///

    public static commandeCustomRoutes = {
        a_idCommande: 'Commande',
        b_idUtilisateur: 'Utilisateur',
        d_idAdresseLivraison: 'Adresse_Utilisateur',
        c_idAdresseFacturation: 'Adresse_Utilisateur',
        h_idFranchise: 'Franchise'
    };

    public static commandeConvivialNames = {
        a_idCommande: 'Id',
        e_dateCommande: 'Date',
        g_statutCommande: 'Statut',
        f_totalTtc: 'Total TTC',
        d_idAdresseLivraison: 'idAdresseLivraison',
        c_idAdresseFacturation: 'idAdresseFacturation',
        b_idUtilisateur: 'idUtilisateur',
        h_idFranchise: 'idFranchise',
        i_estActive: 'Active'
    };

    ///
    ///     FOURNISSEUR
    ///
    public static fournisseurCustomRoutes = {
        a_idFournisseur: 'Fournisseur',
        b_idFranchise: 'Franchise',
        g_adresseFournisseur: 'Adresse_Fournisseur'
    };

    public static fournisseurConvivialNames = {
        a_idFournisseur: 'Id',
        b_idFranchise: 'idFranchise',
        c_nomFournisseur: 'Nom',
        d_numeroSiretFournisseur: 'Siret',
        e_emailFournisseur: 'E-mail',
        f_numeroTelFourniseur: 'Téléphone',
        g_adresseFournisseur: 'adresseFournisseur',
        h_estActive: 'Actif'
    };

    ///
    ///     FRANCHISE
    ///
    public static franchiseCustomRoutes = {
        a_idFranchise: 'Franchise',
        c_idGroupeFranchise: 'Groupe_Franchise'
    };

    public static franchiseConvivialNames = {
        a_idFranchise: 'Id',
        c_idGroupeFranchise: 'idGroupeFranchise',
        d_nomFranchise: 'Nom',
        e_numeroSiretFranchise: 'Siret',
        b_emailFranchise: 'E-mail',
        f_numeroTelFranchise: 'Téléphone',
        g_estActive: 'Active'
    };

    ///
    ///     GROUPE FRANCHISE
    ///
    public static groupeFranchiseCustomRoutes = {
        a_idGroupeFranchise: 'Groupe_Franchise'
    };

    public static groupeFranchiseConvivialNames = {
        a_idGroupeFranchise: 'Id',
        b_nomGroupeFranchise: 'Nom',
        c_estActive: 'Actif'
    };

    ///
    ///     LIGNE COMMANDE
    ///
    public static ligneCommandeCustomRoutes = {
        a_idLigneCommande: 'Ligne_Commande',
        b_idCommande: 'Commande',
        c_idArticle: 'Article'
    };

    public static ligneCommandeConvivialNames = {
        a_idLigneCommande: 'Id',
        b_idCommande: 'idCommande',
        c_idArticle: 'idArticle',
        d_quantiteArticle: 'Quantite',
        e_sousTotalTtc: 'Sous-total TTC',
        f_estActive: 'Active'
    };

    ///
    ///     PROMOS
    ///
    public static promosCustomRoutes = {
        a_idPromo: 'Promo',
        c_idArticle: 'Article'
    };
    public static promosConvivialNames = {
        c_idArticle: 'idArticle',
        a_idPromo: 'Id',
        d_libellePromo: 'Libellé',
        e_reduction: 'Réduction (en %)',
        b_estActive: 'Active'
    };

    ///
    ///     UTILISATEUR
    ///
    public static userCustomRoutes = {
        a_idUtilisateur: 'Utilisateur',
        j_idFranchise: 'Franchise',
        c_idAdresseFacturation: 'Adresse_Utilisateur',
        b_idAdresseLivraison: 'Adresse_Utilisateur'
    };
    public static userConvivialNames = {
        a_idUtilisateur: 'Id',
        d_emailUtilisateur: 'E-mail',
        e_mdpUtilisateur: 'Mot de passe',
        c_idAdresseFacturation: 'Adresse de facturation',
        b_idAdresseLivraison: 'Adresse de livraison',
        f_nomUtilisateur: 'Nom',
        h_prenomUtilisateur: 'Prenom',
        g_numeroTelUtilisateur: 'Téléphone',
        i_role: 'role',
        j_idFranchise: 'idFranchise',
        k_estActive: 'Actif'
    };
}
