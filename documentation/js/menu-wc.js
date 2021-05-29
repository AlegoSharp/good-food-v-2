'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">good-food-v-2 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountPageModule.html" data-type="entity-link">AccountPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountPageModule-fa518201b7d23442b5886085b9ec95e6"' : 'data-target="#xs-components-links-module-AccountPageModule-fa518201b7d23442b5886085b9ec95e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountPageModule-fa518201b7d23442b5886085b9ec95e6"' :
                                            'id="xs-components-links-module-AccountPageModule-fa518201b7d23442b5886085b9ec95e6"' }>
                                            <li class="link">
                                                <a href="components/AccountPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountPageRoutingModule.html" data-type="entity-link">AccountPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e146a281eddd7aaf9c92743cb939f077"' : 'data-target="#xs-components-links-module-AppModule-e146a281eddd7aaf9c92743cb939f077"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e146a281eddd7aaf9c92743cb939f077"' :
                                            'id="xs-components-links-module-AppModule-e146a281eddd7aaf9c92743cb939f077"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-e146a281eddd7aaf9c92743cb939f077"' : 'data-target="#xs-injectables-links-module-AppModule-e146a281eddd7aaf9c92743cb939f077"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e146a281eddd7aaf9c92743cb939f077"' :
                                        'id="xs-injectables-links-module-AppModule-e146a281eddd7aaf9c92743cb939f077"' }>
                                        <li class="link">
                                            <a href="injectables/UtilityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UtilityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleDetailPageModule.html" data-type="entity-link">ArticleDetailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArticleDetailPageModule-65569e6e8139ea1f0b9bd2c5b987c015"' : 'data-target="#xs-components-links-module-ArticleDetailPageModule-65569e6e8139ea1f0b9bd2c5b987c015"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArticleDetailPageModule-65569e6e8139ea1f0b9bd2c5b987c015"' :
                                            'id="xs-components-links-module-ArticleDetailPageModule-65569e6e8139ea1f0b9bd2c5b987c015"' }>
                                            <li class="link">
                                                <a href="components/ArticleDetailPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticleDetailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleDetailPageRoutingModule.html" data-type="entity-link">ArticleDetailPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BasketPageModule.html" data-type="entity-link">BasketPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BasketPageModule-d48aeb65c8faaec8ff280fef1c19b816"' : 'data-target="#xs-components-links-module-BasketPageModule-d48aeb65c8faaec8ff280fef1c19b816"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BasketPageModule-d48aeb65c8faaec8ff280fef1c19b816"' :
                                            'id="xs-components-links-module-BasketPageModule-d48aeb65c8faaec8ff280fef1c19b816"' }>
                                            <li class="link">
                                                <a href="components/BasketPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BasketPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BasketPageRoutingModule.html" data-type="entity-link">BasketPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ForgetPasswordPageModule.html" data-type="entity-link">ForgetPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ForgetPasswordPageModule-b1b73079c1435aef46def966044e8f45"' : 'data-target="#xs-components-links-module-ForgetPasswordPageModule-b1b73079c1435aef46def966044e8f45"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ForgetPasswordPageModule-b1b73079c1435aef46def966044e8f45"' :
                                            'id="xs-components-links-module-ForgetPasswordPageModule-b1b73079c1435aef46def966044e8f45"' }>
                                            <li class="link">
                                                <a href="components/ForgetPasswordPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgetPasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ForgetPasswordPageRoutingModule.html" data-type="entity-link">ForgetPasswordPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormPageModule.html" data-type="entity-link">FormPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormPageModule-5eb6db0f0607fa6d1b03f364916881a4"' : 'data-target="#xs-components-links-module-FormPageModule-5eb6db0f0607fa6d1b03f364916881a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormPageModule-5eb6db0f0607fa6d1b03f364916881a4"' :
                                            'id="xs-components-links-module-FormPageModule-5eb6db0f0607fa6d1b03f364916881a4"' }>
                                            <li class="link">
                                                <a href="components/FormPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormPageRoutingModule.html" data-type="entity-link">FormPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-5d521c8f9c231def9683955e0b56b067"' : 'data-target="#xs-components-links-module-HomePageModule-5d521c8f9c231def9683955e0b56b067"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-5d521c8f9c231def9683955e0b56b067"' :
                                            'id="xs-components-links-module-HomePageModule-5d521c8f9c231def9683955e0b56b067"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link">HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-7eaa1484e3471e6cee0c029adf093ff3"' : 'data-target="#xs-components-links-module-LoginPageModule-7eaa1484e3471e6cee0c029adf093ff3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-7eaa1484e3471e6cee0c029adf093ff3"' :
                                            'id="xs-components-links-module-LoginPageModule-7eaa1484e3471e6cee0c029adf093ff3"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link">LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrderPageModule.html" data-type="entity-link">OrderPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderPageModule-c75051d865ff8bf4ce2f1e6c7e59aca9"' : 'data-target="#xs-components-links-module-OrderPageModule-c75051d865ff8bf4ce2f1e6c7e59aca9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderPageModule-c75051d865ff8bf4ce2f1e6c7e59aca9"' :
                                            'id="xs-components-links-module-OrderPageModule-c75051d865ff8bf4ce2f1e6c7e59aca9"' }>
                                            <li class="link">
                                                <a href="components/OrderPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderPageRoutingModule.html" data-type="entity-link">OrderPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PickerModalPageModule.html" data-type="entity-link">PickerModalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PickerModalPageModule-9a7a8d225e2d5c94e1ef810b62eb48b4"' : 'data-target="#xs-components-links-module-PickerModalPageModule-9a7a8d225e2d5c94e1ef810b62eb48b4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PickerModalPageModule-9a7a8d225e2d5c94e1ef810b62eb48b4"' :
                                            'id="xs-components-links-module-PickerModalPageModule-9a7a8d225e2d5c94e1ef810b62eb48b4"' }>
                                            <li class="link">
                                                <a href="components/PickerModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PickerModalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PickerModalPageRoutingModule.html" data-type="entity-link">PickerModalPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsListPageModule.html" data-type="entity-link">ProductsListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductsListPageModule-d8b5884f48fbcf6d48b5ed8f50aa05fc"' : 'data-target="#xs-components-links-module-ProductsListPageModule-d8b5884f48fbcf6d48b5ed8f50aa05fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsListPageModule-d8b5884f48fbcf6d48b5ed8f50aa05fc"' :
                                            'id="xs-components-links-module-ProductsListPageModule-d8b5884f48fbcf6d48b5ed8f50aa05fc"' }>
                                            <li class="link">
                                                <a href="components/ProductsListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductsListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsListPageRoutingModule.html" data-type="entity-link">ProductsListPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageModule.html" data-type="entity-link">RegisterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterPageModule-a591a599cf2d2231b7cf69f5686ed21a"' : 'data-target="#xs-components-links-module-RegisterPageModule-a591a599cf2d2231b7cf69f5686ed21a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterPageModule-a591a599cf2d2231b7cf69f5686ed21a"' :
                                            'id="xs-components-links-module-RegisterPageModule-a591a599cf2d2231b7cf69f5686ed21a"' }>
                                            <li class="link">
                                                <a href="components/RegisterPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageRoutingModule.html" data-type="entity-link">RegisterPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WhoarewePageModule.html" data-type="entity-link">WhoarewePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WhoarewePageModule-dce93c238e2bdcdb7002b687ce8db676"' : 'data-target="#xs-components-links-module-WhoarewePageModule-dce93c238e2bdcdb7002b687ce8db676"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WhoarewePageModule-dce93c238e2bdcdb7002b687ce8db676"' :
                                            'id="xs-components-links-module-WhoarewePageModule-dce93c238e2bdcdb7002b687ce8db676"' }>
                                            <li class="link">
                                                <a href="components/WhoarewePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WhoarewePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WhoarewePageRoutingModule.html" data-type="entity-link">WhoarewePageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Adresse_Fournisseur.html" data-type="entity-link">Adresse_Fournisseur</a>
                            </li>
                            <li class="link">
                                <a href="classes/Adresse_Utilisateur.html" data-type="entity-link">Adresse_Utilisateur</a>
                            </li>
                            <li class="link">
                                <a href="classes/Aliases.html" data-type="entity-link">Aliases</a>
                            </li>
                            <li class="link">
                                <a href="classes/Article.html" data-type="entity-link">Article</a>
                            </li>
                            <li class="link">
                                <a href="classes/Categorie_Article.html" data-type="entity-link">Categorie_Article</a>
                            </li>
                            <li class="link">
                                <a href="classes/Commande.html" data-type="entity-link">Commande</a>
                            </li>
                            <li class="link">
                                <a href="classes/Form.html" data-type="entity-link">Form</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormProperty.html" data-type="entity-link">FormProperty</a>
                            </li>
                            <li class="link">
                                <a href="classes/Franchise.html" data-type="entity-link">Franchise</a>
                            </li>
                            <li class="link">
                                <a href="classes/LigneCommande.html" data-type="entity-link">LigneCommande</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuItem.html" data-type="entity-link">MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Page.html" data-type="entity-link">Page</a>
                            </li>
                            <li class="link">
                                <a href="classes/Promo.html" data-type="entity-link">Promo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utilisateur.html" data-type="entity-link">Utilisateur</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link">AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EnvService.html" data-type="entity-link">EnvService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormService.html" data-type="entity-link">FormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link">StorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilityService.html" data-type="entity-link">UtilityService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/GuardService.html" data-type="entity-link">GuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});