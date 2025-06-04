var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "centrale2018mp2",
  "level": "1",
  "url": "centrale2018mp2.html",
  "type": "Sujet",
  "number": "0",
  "title": "Centrale, 2018, maths 2",
  "body": " Centrale, 2018, maths 2   Enoncé avec corrigé   Ce problème étudie quelques propriétés des fonctions harmoniques ainsi que quelques exemples de telles fonctions (parties I et II). Dans la partie III, largement indépendante du reste du problème, on montre le principe du maximum faible pour le laplacien. Dans la partie IV, on établit un lien entre les fonctions harmoniques de deux variables et les fonctions développables en série entière, et on propose la résolution du problème de Dirichlet dans le disque unité de ℝ² dans la partie V.    Notations   Dans ce préambule et dans les parties I et III, désigne un entier strictement positif.  On munit ℝⁿ de sa structure euclidienne canonique et désigne la norme euclidienne.  Si est une partie de ℝⁿ, alors désigne son adhérence et sa frontière.  Pour et , on désigne par la boule ouverte de centre et de rayon pour la distance euclidienne. Autrement dit La boule fermée de centre et de rayon est alors .  L’opérateur différentiel (appelé laplacien) est défini pour toute fonction à valeurs réelles de classe sur un ouvert par   Une fonction de classe à valeurs réelles sur un ouvert de ℝⁿ est dite harmonique sur si L’ensemble des fonctions harmoniques sur est noté .     Fonctions harmoniques : quelques propriétés   Soit un ouvert non vide de . On note l'espace vectoriel des fonctions de classe de dans .     Montrer que est un sous-espace vectoriel de .    On a . La fonction nulle est harmonique. Soient et , alors est de classe et , est linéaire, donc , alors . Ainsi, est un sous-espace vectoriel de .      Soit . Montrer que si est sur , alors toute dérivée partielle à tout ordre de appartient à .    On suppose que . Soit , posons . Par application du théorème de Schwartz et de la linéarité de l'opérateur dérivée partielle, on a : Donc .      On suppose dans cette question que est connexe par arcs. Déterminer l'ensemble des fonctions de telles que appartienne aussi à .    Soit , alors pour tout , . En dérivant une seconde fois, on obtient : Donc : car . Ainsi, , . Comme est de classe sur , elle est différentiable sur , et étant connexe par arcs, est constante sur .      Donner une fonction non constante appartenant à . Le produit de deux fonctions harmoniques est-il une fonction harmonique ?    L'application est harmonique, mais ne l'est pas. Ainsi, le produit de deux fonctions harmoniques sur n'est pas nécessairement harmonique sur .      II Exemples de fonctions harmoniques   II.A – Fonctions harmoniques à variables séparables   On cherche dans cette question à déterminer les fonctions harmoniques non nulles sur à variables séparables, c’est-à-dire les fonctions s’écrivant sous la forme .     Montrer qu’il existe une constante réelle telle que et soient solutions respectives des équations et     Soit , on a : Comme est harmonique, , donc : En divisant par (qui est non nul car n'est pas identiquement nulle), on obtient : Cela implique qu'il existe une constante telle que : Ainsi, et sont solutions des équations différentielles données.      Donner en fonction du signe de la forme des fonctions harmoniques à variables séparables.    Selon le signe de , les solutions sont :  Si , alors est de la forme .  Si , alors est de la forme :   Si , alors est de la forme :   où sont des constantes arbitraires.      II.B – Fonctions harmoniques radiales   Soit une fonction réelle de classe sur . On pose, pour tout ,      Justifier que est de classe sur .    L'application est de classe sur car ses composantes le sont. Comme , et que est de classe , alors est également de classe .      Pour tout , exprimer et en fonction des dérivées partielles de .    Pour , on pose . Alors : et       Exprimer également et en fonction des dérivées partielles premières et secondes de en .    Pour , on a : et       Montrer que appartient à si et seulement si, pour tout ,     En utilisant les expressions des dérivées partielles de obtenues précédemment, on a : où . Ainsi, est harmonique si et seulement si :       Déterminer les fonctions harmoniques radiales de , c’est-à-dire les fonctions appartenant à telles que soit indépendante de .    Si est radiale, alors est indépendante de . Ainsi, l’équation harmonique se réduit à : En posant , on obtient : Cette équation différentielle a pour solution : où est une constante. En intégrant, on trouve : où est une autre constante. Ainsi, les fonctions harmoniques radiales sont de la forme : où et sont des constantes.      Soient et quatre réels tels que . Déterminer une fonction de classe sur telle que     D’après la question précédente, les fonctions harmoniques radiales sont de la forme : où et sont des constantes. En utilisant les conditions aux limites, on obtient : En résolvant ce système, on trouve : Ainsi, la fonction est donnée par :       II.C – Fonctions harmoniques à variables polaires séparables   Dans cette sous-partie, on considère deux fonctions de classe , et , et on pose      Montrer que, si n’est pas identiquement nulle, alors est -périodique.    Pour tout , on a : Donc . Comme n'est pas identiquement nulle, il existe tel que , ce qui implique que pour tout . Ainsi, est -périodique.      Montrer que, si est harmonique et non identiquement nulle sur , alors il existe un réel tel que soit solution de l’équation différentielle et soit solution de l’équation différentielle     Par la question précédente, on a : En divisant par (qui est non nul car n'est pas identiquement nulle), on obtient : Cela implique qu'il existe une constante telle que : Ainsi, et sont solutions des équations différentielles données.      II.C.1 – Cas où    Quelles sont les solutions -périodiques de l’équation lorsque ?    Si , l’équation devient , dont les solutions sont de la forme . Pour que soit -périodique, il faut que . Ainsi, les solutions -périodiques sont les fonctions constantes .      Résoudre l’équation différentielle sur .    L’équation différentielle peut être réécrite sous la forme : En posant , on obtient : Cette équation est une équation différentielle linéaire du premier ordre, dont la solution est : où est une constante. En intégrant, on trouve : où est une autre constante. Ainsi, les solutions sont de la forme .      En déduire, dans le cas , les fonctions harmoniques à variables polaires séparables.    Dans le cas , les fonctions harmoniques à variables polaires séparables sont de la forme : où , et sont des constantes. Ainsi, les fonctions harmoniques sont de la forme : où et sont des constantes.      II.C.2 – Cas où    Donner une condition nécessaire et suffisante pour que l’équation admette des solutions -périodiques non nulles. Donner ces solutions.    Pour que l’équation admette des solutions -périodiques non nulles, il faut que . Dans ce cas, les solutions sont de la forme : où et sont des constantes.      Résoudre l’équation différentielle sur .    L’équation différentielle est une équation d’Euler. En posant , on obtient l’équation caractéristique : Les solutions sont donc : et où et sont des constantes.      Quelles sont les solutions se prolongeant par continuité en ?    Pour que se prolonge par continuité en , il faut que reste bornée lorsque . Dans le cas , la solution ne reste bornée que si . Ainsi, les solutions prolongeables en sont de la forme : Dans le cas , aucune solution ne reste bornée en .       III Principe du maximum faible   Soit un ouvert borné non vide de ( ) et de classe . Le but de cette partie est de montrer le théorème suivant, connu sous le nom de principe du maximum faible : où désigne la frontière de .    III.A – Cas où    Montrer que admet un maximum en un point .    Comme est un ouvert borné, est un fermé borné de , donc un compact. La fonction est continue sur , donc elle est bornée et atteint ses bornes. Ainsi, admet un maximum en un point .      On suppose de plus que est de classe sur et que, pour tout , . Montrer que et en déduire que , .    Supposons par l'absurde que . Comme admet un maximum en , toutes les dérivées partielles secondes de en doivent être négatives ou nulles. En particulier, , ce qui contredit l'hypothèse . Ainsi, .  Par conséquent, , , car atteint son maximum sur uniquement en des points de .      III.B – Cas général    Soit une fonction continue sur , de classe et harmonique sur . Pour tout , on pose . Montrer que est une fonction continue sur , de classe sur , et telle que , .    La fonction est continue sur car est continue et est continue. Elle est de classe sur car est de classe et est de classe .  De plus, pour tout , on a : car est harmonique et .      En déduire que , .    Par la question précédente, vérifie pour tout . D’après la partie III.A, on a : En faisant tendre , on obtient :       Soient et deux fonctions continues sur , de classe et harmoniques sur . Montrer que si les fonctions et sont égales sur , alors et sont égales sur .    Considérons la fonction . Alors est continue sur , de classe sur , et harmonique sur . De plus, sur .  Par le principe du maximum faible, on a : et Ainsi, pour tout , c’est-à-dire sur .       IV Fonctions harmoniques et fonctions développables en série entière   On dit qu’une fonction , définie sur et à valeurs complexes, se développe en série entière sur s’il existe une suite complexe telle que Dans toute cette partie, désigne une fonction se développant en série entière sur .    IV.A – Fonctions développables en série entière    Montrer que est de classe sur et que ses dérivées partielles se développent en série entière sur . Que peut-on en déduire pour la fonction ?    La fonction se développe en série entière sur , donc elle est analytique sur . Par conséquent, est de classe sur , et en particulier de classe .  Les dérivées partielles de sont données par : et Ces séries convergent également sur , donc les dérivées partielles se développent en série entière.  On en déduit que est de classe sur .      On note et les parties réelle et imaginaire de , de sorte que, quel que soit , Montrer que et sont des fonctions harmoniques sur .    La fonction est analytique, donc elle vérifie les équations de Cauchy-Riemann : En dérivant ces équations, on obtient : En additionnant ces deux équations, on trouve : De même, on montre que . Ainsi, et sont harmoniques sur .      IV.B – Propriétés des fonctions développables en série entière   On admet le résultat suivant : une fonction de dans se développe en série entière sur si et seulement si est de classe sur et pour tout ,      Montrer que si ne s’annule pas sur , alors se développe en série entière sur .    Si ne s’annule pas sur , alors est bien définie et de classe sur . De plus, comme est analytique, elle vérifie les équations de Cauchy-Riemann : En dérivant , on obtient : Ainsi, vérifie également les équations de Cauchy-Riemann et est donc développable en série entière sur .      Montrer que la fonction est harmonique sur .    On a : Comme et sont harmoniques, . De plus, les équations de Cauchy-Riemann donnent : Ainsi : Donc , et est harmonique sur .      IV.C – Fonctions harmoniques et leurs primitives    Soit une fonction de dans . On suppose que est harmonique. Montrer que la fonction définie sur par se développe en série entière sur .    La fonction est harmonique, donc elle est de classe sur . Ainsi, est de classe sur . De plus, comme est harmonique, on a : En dérivant , on obtient : et En utilisant le théorème de Schwarz et l’équation harmonique, on a : Ainsi, vérifie les équations de Cauchy-Riemann et est donc développable en série entière sur .      Montrer que si appartient à , alors il existe une fonction se développant en série entière sur telle que est la partie réelle de .    D’après la question précédente, la fonction définie par se développe en série entière sur . On peut donc écrire : En intégrant terme à terme, on obtient une fonction telle que : où est une constante. La partie réelle de est alors , car : et Ainsi, est la partie réelle de .      IV.D – Propriétés intégrales des fonctions harmoniques    Montrer que pour tout , on a     La fonction se développe en série entière sur , donc on peut écrire : En coordonnées polaires, on a : En intégrant sur , on obtient : Or, pour , , et pour , . Ainsi : Donc :       Montrer un résultat analogue pour les fonctions harmoniques.    Soit une fonction harmonique sur . D’après la question précédente, il existe une fonction se développant en série entière sur telle que est la partie réelle de . Ainsi, on a : car la partie réelle de l’intégrale est égale à l’intégrale de la partie réelle.      Montrer que , .    D’après la question précédente, on a : Comme , on a :       Montrer un résultat analogue pour les fonctions harmoniques.    Soit une fonction harmonique sur . D’après la question précédente, on a : car est la partie réelle d’une fonction développable en série entière.      Montrer que si admet un maximum en , alors est constante sur .    Si admet un maximum en , alors pour tout , on a : Ainsi, est constante sur . Comme est analytique, cela implique que est constante sur .      Montrer le théorème de d’Alembert-Gauss : tout polynôme complexe non constant admet au moins une racine.    Supposons par l’absurde qu’il existe un polynôme complexe non constant qui ne s’annule pas sur . Alors est une fonction entière (analytique sur tout ). Comme est non constant, lorsque , donc est bornée sur . Par le théorème de Liouville, est constante, ce qui implique que est constant, ce qui est une contradiction. Ainsi, admet au moins une racine.       V Résolution du problème de Dirichlet dans le disque unité de \\(\\mathbb{R}^2\\)   Soit une fonction de dans , continue et -périodique sur . On cherche à résoudre le problème de Dirichlet sur le disque unité ; autrement dit, il s’agit de déterminer, s’il y en a, la ou les fonctions définies et continues sur (disque fermé), de classe sur , et telles que      Pour tout nombre complexe tel que , on pose où Montrer que la fonction est développable en série entière pour et calculer son développement en série entière. En déduire que la fonction est une fonction harmonique sur .    Pour , on a : En regroupant les termes, on obtient : Ainsi, la fonction est développable en série entière pour .  En prenant la partie réelle, on a : La fonction est donc une combinaison linéaire de fonctions harmoniques (les parties réelles des monômes ), donc est harmonique sur .      Montrer que, pour tout nombre complexe tel que ,     D’après le développement en série entière de , on a : En intégrant sur , les termes s’annulent pour , car : Ainsi, il reste :       Soit . Montrer que, pour tout nombre complexe tel que ,     La fonction est -périodique, donc l’intégrale de sur un intervalle de longueur est indépendante de l’origine de l’intervalle. Ainsi : Donc :       Montrer que, pour tout et tous réels et ,     En utilisant l’expression de , on a : En multipliant le numérateur et le dénominateur par , on obtient : En utilisant l’identité , on trouve :       Montrer que, pour tout et tout réel ,     Pour , le noyau de Poisson se concentre autour de , où . Ainsi, pour loin de , devient très petit. En particulier, pour , on a : Donc l’intégrale sur cet intervalle tend vers 0.      En utilisant le théorème de Heine, montrer que, pour tout , il existe tel que, pour tout nombre réel et tout nombre complexe vérifiant ,     Par le théorème de Heine, est uniformément continue sur . Ainsi, pour tout , il existe tel que : En utilisant cette propriété, on peut écrire : Le premier terme est majoré par , et le second terme est majoré par : Ainsi, on obtient l’inégalité demandée.      Montrer l’existence et l’unicité de la solution au problème de Dirichlet étudié dans cette partie.    L’existence de la solution est garantie par la construction de la fonction , qui est harmonique sur et vérifie pour tout .  Pour l’unicité, supposons que et sont deux solutions du problème de Dirichlet. Alors est harmonique sur et nulle sur le bord . Par le principe du maximum, sur , donc .      "
},
{
  "id": "enocor-4-3",
  "level": "2",
  "url": "enocor.html#enocor-4-3",
  "type": "Exercice",
  "number": "0.1",
  "title": "",
  "body": "  Montrer que est un sous-espace vectoriel de .    On a . La fonction nulle est harmonique. Soient et , alors est de classe et , est linéaire, donc , alors . Ainsi, est un sous-espace vectoriel de .   "
},
{
  "id": "enocor-4-4",
  "level": "2",
  "url": "enocor.html#enocor-4-4",
  "type": "Exercice",
  "number": "0.2",
  "title": "",
  "body": "  Soit . Montrer que si est sur , alors toute dérivée partielle à tout ordre de appartient à .    On suppose que . Soit , posons . Par application du théorème de Schwartz et de la linéarité de l'opérateur dérivée partielle, on a : Donc .   "
},
{
  "id": "enocor-4-5",
  "level": "2",
  "url": "enocor.html#enocor-4-5",
  "type": "Exercice",
  "number": "0.3",
  "title": "",
  "body": "  On suppose dans cette question que est connexe par arcs. Déterminer l'ensemble des fonctions de telles que appartienne aussi à .    Soit , alors pour tout , . En dérivant une seconde fois, on obtient : Donc : car . Ainsi, , . Comme est de classe sur , elle est différentiable sur , et étant connexe par arcs, est constante sur .   "
},
{
  "id": "enocor-4-6",
  "level": "2",
  "url": "enocor.html#enocor-4-6",
  "type": "Exercice",
  "number": "0.4",
  "title": "",
  "body": "  Donner une fonction non constante appartenant à . Le produit de deux fonctions harmoniques est-il une fonction harmonique ?    L'application est harmonique, mais ne l'est pas. Ainsi, le produit de deux fonctions harmoniques sur n'est pas nécessairement harmonique sur .   "
},
{
  "id": "enocor-5-2-3",
  "level": "2",
  "url": "enocor.html#enocor-5-2-3",
  "type": "Exercice",
  "number": "0.5",
  "title": "",
  "body": "  Montrer qu’il existe une constante réelle telle que et soient solutions respectives des équations et     Soit , on a : Comme est harmonique, , donc : En divisant par (qui est non nul car n'est pas identiquement nulle), on obtient : Cela implique qu'il existe une constante telle que : Ainsi, et sont solutions des équations différentielles données.   "
},
{
  "id": "enocor-5-2-4",
  "level": "2",
  "url": "enocor.html#enocor-5-2-4",
  "type": "Exercice",
  "number": "0.6",
  "title": "",
  "body": "  Donner en fonction du signe de la forme des fonctions harmoniques à variables séparables.    Selon le signe de , les solutions sont :  Si , alors est de la forme .  Si , alors est de la forme :   Si , alors est de la forme :   où sont des constantes arbitraires.   "
},
{
  "id": "enocor-5-3-3",
  "level": "2",
  "url": "enocor.html#enocor-5-3-3",
  "type": "Exercice",
  "number": "0.7",
  "title": "",
  "body": "  Justifier que est de classe sur .    L'application est de classe sur car ses composantes le sont. Comme , et que est de classe , alors est également de classe .   "
},
{
  "id": "enocor-5-3-4",
  "level": "2",
  "url": "enocor.html#enocor-5-3-4",
  "type": "Exercice",
  "number": "0.8",
  "title": "",
  "body": "  Pour tout , exprimer et en fonction des dérivées partielles de .    Pour , on pose . Alors : et    "
},
{
  "id": "enocor-5-3-5",
  "level": "2",
  "url": "enocor.html#enocor-5-3-5",
  "type": "Exercice",
  "number": "0.9",
  "title": "",
  "body": "  Exprimer également et en fonction des dérivées partielles premières et secondes de en .    Pour , on a : et    "
},
{
  "id": "enocor-5-3-6",
  "level": "2",
  "url": "enocor.html#enocor-5-3-6",
  "type": "Exercice",
  "number": "0.10",
  "title": "",
  "body": "  Montrer que appartient à si et seulement si, pour tout ,     En utilisant les expressions des dérivées partielles de obtenues précédemment, on a : où . Ainsi, est harmonique si et seulement si :    "
},
{
  "id": "enocor-5-3-7",
  "level": "2",
  "url": "enocor.html#enocor-5-3-7",
  "type": "Exercice",
  "number": "0.11",
  "title": "",
  "body": "  Déterminer les fonctions harmoniques radiales de , c’est-à-dire les fonctions appartenant à telles que soit indépendante de .    Si est radiale, alors est indépendante de . Ainsi, l’équation harmonique se réduit à : En posant , on obtient : Cette équation différentielle a pour solution : où est une constante. En intégrant, on trouve : où est une autre constante. Ainsi, les fonctions harmoniques radiales sont de la forme : où et sont des constantes.   "
},
{
  "id": "enocor-5-3-8",
  "level": "2",
  "url": "enocor.html#enocor-5-3-8",
  "type": "Exercice",
  "number": "0.12",
  "title": "",
  "body": "  Soient et quatre réels tels que . Déterminer une fonction de classe sur telle que     D’après la question précédente, les fonctions harmoniques radiales sont de la forme : où et sont des constantes. En utilisant les conditions aux limites, on obtient : En résolvant ce système, on trouve : Ainsi, la fonction est donnée par :    "
},
{
  "id": "enocor-5-4-3",
  "level": "2",
  "url": "enocor.html#enocor-5-4-3",
  "type": "Exercice",
  "number": "0.13",
  "title": "",
  "body": "  Montrer que, si n’est pas identiquement nulle, alors est -périodique.    Pour tout , on a : Donc . Comme n'est pas identiquement nulle, il existe tel que , ce qui implique que pour tout . Ainsi, est -périodique.   "
},
{
  "id": "enocor-5-4-4",
  "level": "2",
  "url": "enocor.html#enocor-5-4-4",
  "type": "Exercice",
  "number": "0.14",
  "title": "",
  "body": "  Montrer que, si est harmonique et non identiquement nulle sur , alors il existe un réel tel que soit solution de l’équation différentielle et soit solution de l’équation différentielle     Par la question précédente, on a : En divisant par (qui est non nul car n'est pas identiquement nulle), on obtient : Cela implique qu'il existe une constante telle que : Ainsi, et sont solutions des équations différentielles données.   "
},
{
  "id": "enocor-5-5-2",
  "level": "2",
  "url": "enocor.html#enocor-5-5-2",
  "type": "Exercice",
  "number": "0.15",
  "title": "",
  "body": "  Quelles sont les solutions -périodiques de l’équation lorsque ?    Si , l’équation devient , dont les solutions sont de la forme . Pour que soit -périodique, il faut que . Ainsi, les solutions -périodiques sont les fonctions constantes .   "
},
{
  "id": "enocor-5-5-3",
  "level": "2",
  "url": "enocor.html#enocor-5-5-3",
  "type": "Exercice",
  "number": "0.16",
  "title": "",
  "body": "  Résoudre l’équation différentielle sur .    L’équation différentielle peut être réécrite sous la forme : En posant , on obtient : Cette équation est une équation différentielle linéaire du premier ordre, dont la solution est : où est une constante. En intégrant, on trouve : où est une autre constante. Ainsi, les solutions sont de la forme .   "
},
{
  "id": "enocor-5-5-4",
  "level": "2",
  "url": "enocor.html#enocor-5-5-4",
  "type": "Exercice",
  "number": "0.17",
  "title": "",
  "body": "  En déduire, dans le cas , les fonctions harmoniques à variables polaires séparables.    Dans le cas , les fonctions harmoniques à variables polaires séparables sont de la forme : où , et sont des constantes. Ainsi, les fonctions harmoniques sont de la forme : où et sont des constantes.   "
},
{
  "id": "enocor-5-6-2",
  "level": "2",
  "url": "enocor.html#enocor-5-6-2",
  "type": "Exercice",
  "number": "0.18",
  "title": "",
  "body": "  Donner une condition nécessaire et suffisante pour que l’équation admette des solutions -périodiques non nulles. Donner ces solutions.    Pour que l’équation admette des solutions -périodiques non nulles, il faut que . Dans ce cas, les solutions sont de la forme : où et sont des constantes.   "
},
{
  "id": "enocor-5-6-3",
  "level": "2",
  "url": "enocor.html#enocor-5-6-3",
  "type": "Exercice",
  "number": "0.19",
  "title": "",
  "body": "  Résoudre l’équation différentielle sur .    L’équation différentielle est une équation d’Euler. En posant , on obtient l’équation caractéristique : Les solutions sont donc : et où et sont des constantes.   "
},
{
  "id": "enocor-5-6-4",
  "level": "2",
  "url": "enocor.html#enocor-5-6-4",
  "type": "Exercice",
  "number": "0.20",
  "title": "",
  "body": "  Quelles sont les solutions se prolongeant par continuité en ?    Pour que se prolonge par continuité en , il faut que reste bornée lorsque . Dans le cas , la solution ne reste bornée que si . Ainsi, les solutions prolongeables en sont de la forme : Dans le cas , aucune solution ne reste bornée en .   "
},
{
  "id": "enocor-6-3-2",
  "level": "2",
  "url": "enocor.html#enocor-6-3-2",
  "type": "Exercice",
  "number": "0.21",
  "title": "",
  "body": "  Montrer que admet un maximum en un point .    Comme est un ouvert borné, est un fermé borné de , donc un compact. La fonction est continue sur , donc elle est bornée et atteint ses bornes. Ainsi, admet un maximum en un point .   "
},
{
  "id": "enocor-6-3-3",
  "level": "2",
  "url": "enocor.html#enocor-6-3-3",
  "type": "Exercice",
  "number": "0.22",
  "title": "",
  "body": "  On suppose de plus que est de classe sur et que, pour tout , . Montrer que et en déduire que , .    Supposons par l'absurde que . Comme admet un maximum en , toutes les dérivées partielles secondes de en doivent être négatives ou nulles. En particulier, , ce qui contredit l'hypothèse . Ainsi, .  Par conséquent, , , car atteint son maximum sur uniquement en des points de .   "
},
{
  "id": "enocor-6-4-2",
  "level": "2",
  "url": "enocor.html#enocor-6-4-2",
  "type": "Exercice",
  "number": "0.23",
  "title": "",
  "body": "  Soit une fonction continue sur , de classe et harmonique sur . Pour tout , on pose . Montrer que est une fonction continue sur , de classe sur , et telle que , .    La fonction est continue sur car est continue et est continue. Elle est de classe sur car est de classe et est de classe .  De plus, pour tout , on a : car est harmonique et .   "
},
{
  "id": "enocor-6-4-3",
  "level": "2",
  "url": "enocor.html#enocor-6-4-3",
  "type": "Exercice",
  "number": "0.24",
  "title": "",
  "body": "  En déduire que , .    Par la question précédente, vérifie pour tout . D’après la partie III.A, on a : En faisant tendre , on obtient :    "
},
{
  "id": "enocor-6-4-4",
  "level": "2",
  "url": "enocor.html#enocor-6-4-4",
  "type": "Exercice",
  "number": "0.25",
  "title": "",
  "body": "  Soient et deux fonctions continues sur , de classe et harmoniques sur . Montrer que si les fonctions et sont égales sur , alors et sont égales sur .    Considérons la fonction . Alors est continue sur , de classe sur , et harmonique sur . De plus, sur .  Par le principe du maximum faible, on a : et Ainsi, pour tout , c’est-à-dire sur .   "
},
{
  "id": "enocor-7-3-2",
  "level": "2",
  "url": "enocor.html#enocor-7-3-2",
  "type": "Exercice",
  "number": "0.26",
  "title": "",
  "body": "  Montrer que est de classe sur et que ses dérivées partielles se développent en série entière sur . Que peut-on en déduire pour la fonction ?    La fonction se développe en série entière sur , donc elle est analytique sur . Par conséquent, est de classe sur , et en particulier de classe .  Les dérivées partielles de sont données par : et Ces séries convergent également sur , donc les dérivées partielles se développent en série entière.  On en déduit que est de classe sur .   "
},
{
  "id": "enocor-7-3-3",
  "level": "2",
  "url": "enocor.html#enocor-7-3-3",
  "type": "Exercice",
  "number": "0.27",
  "title": "",
  "body": "  On note et les parties réelle et imaginaire de , de sorte que, quel que soit , Montrer que et sont des fonctions harmoniques sur .    La fonction est analytique, donc elle vérifie les équations de Cauchy-Riemann : En dérivant ces équations, on obtient : En additionnant ces deux équations, on trouve : De même, on montre que . Ainsi, et sont harmoniques sur .   "
},
{
  "id": "enocor-7-4-3",
  "level": "2",
  "url": "enocor.html#enocor-7-4-3",
  "type": "Exercice",
  "number": "0.28",
  "title": "",
  "body": "  Montrer que si ne s’annule pas sur , alors se développe en série entière sur .    Si ne s’annule pas sur , alors est bien définie et de classe sur . De plus, comme est analytique, elle vérifie les équations de Cauchy-Riemann : En dérivant , on obtient : Ainsi, vérifie également les équations de Cauchy-Riemann et est donc développable en série entière sur .   "
},
{
  "id": "enocor-7-4-4",
  "level": "2",
  "url": "enocor.html#enocor-7-4-4",
  "type": "Exercice",
  "number": "0.29",
  "title": "",
  "body": "  Montrer que la fonction est harmonique sur .    On a : Comme et sont harmoniques, . De plus, les équations de Cauchy-Riemann donnent : Ainsi : Donc , et est harmonique sur .   "
},
{
  "id": "enocor-7-5-2",
  "level": "2",
  "url": "enocor.html#enocor-7-5-2",
  "type": "Exercice",
  "number": "0.30",
  "title": "",
  "body": "  Soit une fonction de dans . On suppose que est harmonique. Montrer que la fonction définie sur par se développe en série entière sur .    La fonction est harmonique, donc elle est de classe sur . Ainsi, est de classe sur . De plus, comme est harmonique, on a : En dérivant , on obtient : et En utilisant le théorème de Schwarz et l’équation harmonique, on a : Ainsi, vérifie les équations de Cauchy-Riemann et est donc développable en série entière sur .   "
},
{
  "id": "enocor-7-5-3",
  "level": "2",
  "url": "enocor.html#enocor-7-5-3",
  "type": "Exercice",
  "number": "0.31",
  "title": "",
  "body": "  Montrer que si appartient à , alors il existe une fonction se développant en série entière sur telle que est la partie réelle de .    D’après la question précédente, la fonction définie par se développe en série entière sur . On peut donc écrire : En intégrant terme à terme, on obtient une fonction telle que : où est une constante. La partie réelle de est alors , car : et Ainsi, est la partie réelle de .   "
},
{
  "id": "enocor-7-6-2",
  "level": "2",
  "url": "enocor.html#enocor-7-6-2",
  "type": "Exercice",
  "number": "0.32",
  "title": "",
  "body": "  Montrer que pour tout , on a     La fonction se développe en série entière sur , donc on peut écrire : En coordonnées polaires, on a : En intégrant sur , on obtient : Or, pour , , et pour , . Ainsi : Donc :    "
},
{
  "id": "enocor-7-6-3",
  "level": "2",
  "url": "enocor.html#enocor-7-6-3",
  "type": "Exercice",
  "number": "0.33",
  "title": "",
  "body": "  Montrer un résultat analogue pour les fonctions harmoniques.    Soit une fonction harmonique sur . D’après la question précédente, il existe une fonction se développant en série entière sur telle que est la partie réelle de . Ainsi, on a : car la partie réelle de l’intégrale est égale à l’intégrale de la partie réelle.   "
},
{
  "id": "enocor-7-6-4",
  "level": "2",
  "url": "enocor.html#enocor-7-6-4",
  "type": "Exercice",
  "number": "0.34",
  "title": "",
  "body": "  Montrer que , .    D’après la question précédente, on a : Comme , on a :    "
},
{
  "id": "enocor-7-6-5",
  "level": "2",
  "url": "enocor.html#enocor-7-6-5",
  "type": "Exercice",
  "number": "0.35",
  "title": "",
  "body": "  Montrer un résultat analogue pour les fonctions harmoniques.    Soit une fonction harmonique sur . D’après la question précédente, on a : car est la partie réelle d’une fonction développable en série entière.   "
},
{
  "id": "enocor-7-6-6",
  "level": "2",
  "url": "enocor.html#enocor-7-6-6",
  "type": "Exercice",
  "number": "0.36",
  "title": "",
  "body": "  Montrer que si admet un maximum en , alors est constante sur .    Si admet un maximum en , alors pour tout , on a : Ainsi, est constante sur . Comme est analytique, cela implique que est constante sur .   "
},
{
  "id": "enocor-7-6-7",
  "level": "2",
  "url": "enocor.html#enocor-7-6-7",
  "type": "Exercice",
  "number": "0.37",
  "title": "",
  "body": "  Montrer le théorème de d’Alembert-Gauss : tout polynôme complexe non constant admet au moins une racine.    Supposons par l’absurde qu’il existe un polynôme complexe non constant qui ne s’annule pas sur . Alors est une fonction entière (analytique sur tout ). Comme est non constant, lorsque , donc est bornée sur . Par le théorème de Liouville, est constante, ce qui implique que est constant, ce qui est une contradiction. Ainsi, admet au moins une racine.   "
},
{
  "id": "enocor-8-3",
  "level": "2",
  "url": "enocor.html#enocor-8-3",
  "type": "Exercice",
  "number": "0.38",
  "title": "",
  "body": "  Pour tout nombre complexe tel que , on pose où Montrer que la fonction est développable en série entière pour et calculer son développement en série entière. En déduire que la fonction est une fonction harmonique sur .    Pour , on a : En regroupant les termes, on obtient : Ainsi, la fonction est développable en série entière pour .  En prenant la partie réelle, on a : La fonction est donc une combinaison linéaire de fonctions harmoniques (les parties réelles des monômes ), donc est harmonique sur .   "
},
{
  "id": "enocor-8-4",
  "level": "2",
  "url": "enocor.html#enocor-8-4",
  "type": "Exercice",
  "number": "0.39",
  "title": "",
  "body": "  Montrer que, pour tout nombre complexe tel que ,     D’après le développement en série entière de , on a : En intégrant sur , les termes s’annulent pour , car : Ainsi, il reste :    "
},
{
  "id": "enocor-8-5",
  "level": "2",
  "url": "enocor.html#enocor-8-5",
  "type": "Exercice",
  "number": "0.40",
  "title": "",
  "body": "  Soit . Montrer que, pour tout nombre complexe tel que ,     La fonction est -périodique, donc l’intégrale de sur un intervalle de longueur est indépendante de l’origine de l’intervalle. Ainsi : Donc :    "
},
{
  "id": "enocor-8-6",
  "level": "2",
  "url": "enocor.html#enocor-8-6",
  "type": "Exercice",
  "number": "0.41",
  "title": "",
  "body": "  Montrer que, pour tout et tous réels et ,     En utilisant l’expression de , on a : En multipliant le numérateur et le dénominateur par , on obtient : En utilisant l’identité , on trouve :    "
},
{
  "id": "enocor-8-7",
  "level": "2",
  "url": "enocor.html#enocor-8-7",
  "type": "Exercice",
  "number": "0.42",
  "title": "",
  "body": "  Montrer que, pour tout et tout réel ,     Pour , le noyau de Poisson se concentre autour de , où . Ainsi, pour loin de , devient très petit. En particulier, pour , on a : Donc l’intégrale sur cet intervalle tend vers 0.   "
},
{
  "id": "enocor-8-8",
  "level": "2",
  "url": "enocor.html#enocor-8-8",
  "type": "Exercice",
  "number": "0.43",
  "title": "",
  "body": "  En utilisant le théorème de Heine, montrer que, pour tout , il existe tel que, pour tout nombre réel et tout nombre complexe vérifiant ,     Par le théorème de Heine, est uniformément continue sur . Ainsi, pour tout , il existe tel que : En utilisant cette propriété, on peut écrire : Le premier terme est majoré par , et le second terme est majoré par : Ainsi, on obtient l’inégalité demandée.   "
},
{
  "id": "enocor-8-9",
  "level": "2",
  "url": "enocor.html#enocor-8-9",
  "type": "Exercice",
  "number": "0.44",
  "title": "",
  "body": "  Montrer l’existence et l’unicité de la solution au problème de Dirichlet étudié dans cette partie.    L’existence de la solution est garantie par la construction de la fonction , qui est harmonique sur et vérifie pour tout .  Pour l’unicité, supposons que et sont deux solutions du problème de Dirichlet. Alors est harmonique sur et nulle sur le bord . Par le principe du maximum, sur , donc .   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.use(lunr.fr)
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
