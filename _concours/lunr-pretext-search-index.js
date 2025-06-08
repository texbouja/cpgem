var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "centrale2018mp2",
  "level": "1",
  "url": "centrale2018mp2.html",
  "type": "Sujet",
  "number": "1",
  "title": "concours: centrale, session: 2018, filiere: mp, epreuve: 2",
  "body": " concours: centrale, session: 2018, filiere: mp, epreuve: 2   L'objectif est d'étudier les fonctions dites harmoniques et de démontrer le principe du maximum pour celles-ci. Plusieurs applications en sont proposées : une démonstration du théorème fondamental de l'algèbre et la résolution du problème dit de Dirichlet.   Énoncé et corrigé   Ce problème étudie quelques propriétés des fonctions harmoniques ainsi que quelques exemples de telles fonctions (parties I et II). Dans la partie III, largement indépendante du reste du problème, on montre le principe du maximum faible pour le laplacien. Dans la partie IV, on établit un lien entre les fonctions harmoniques de deux variables et les fonctions développables en série entière, et on propose la résolution du problème de Dirichlet dans le disque unité de ℝ² dans la partie V.    Notations   Dans ce préambule et dans les parties I et III, désigne un entier strictement positif.  On munit ℝⁿ de sa structure euclidienne canonique et désigne la norme euclidienne.  Si est une partie de ℝⁿ, alors désigne son adhérence et sa frontière.  Pour et , on désigne par la boule ouverte de centre et de rayon pour la distance euclidienne. Autrement dit La boule fermée de centre et de rayon est alors .  L’opérateur différentiel (appelé laplacien) est défini pour toute fonction à valeurs réelles de classe sur un ouvert par   Une fonction de classe à valeurs réelles sur un ouvert de ℝⁿ est dite harmonique sur si L’ensemble des fonctions harmoniques sur est noté .     Fonctions harmoniques : quelques propriétés   Soit un ouvert non vide de . On note l'espace vectoriel des fonctions de classe de dans .   La première question   Montrer que est un sous-espace vectoriel de .    On a . La fonction nulle est harmonique. Soient et , alors est de classe et , est linéaire, donc , alors . Ainsi, est un sous-espace vectoriel de .      Soit . Montrer que si est sur , alors toute dérivée partielle à tout ordre de appartient à .    On suppose que . Soit , posons . Par application du théorème de Schwartz et de la linéarité de l'opérateur dérivée partielle, on a : Donc .      On suppose dans cette question que est connexe par arcs. Déterminer l'ensemble des fonctions de telles que appartienne aussi à .    Soit , alors pour tout , . En dérivant une seconde fois, on obtient : Donc : car . Ainsi, , . Comme est de classe sur , elle est différentiable sur , et étant connexe par arcs, est constante sur .      Donner une fonction non constante appartenant à . Le produit de deux fonctions harmoniques est-il une fonction harmonique ?    L'application est harmonique, mais ne l'est pas. Ainsi, le produit de deux fonctions harmoniques sur n'est pas nécessairement harmonique sur .      Exemples de fonctions harmoniques   Fonctions harmoniques à variables séparables   On cherche dans cette question à déterminer les fonctions harmoniques non nulles sur à variables séparables, c’est-à-dire les fonctions s’écrivant sous la forme .     Montrer qu’il existe une constante réelle telle que et soient solutions respectives des équations et     Soit , on a : Comme est harmonique, , donc : En divisant par (qui est non nul car n'est pas identiquement nulle), on obtient : Cela implique qu'il existe une constante telle que : Ainsi, et sont solutions des équations différentielles données.      Donner en fonction du signe de la forme des fonctions harmoniques à variables séparables.    Selon le signe de , les solutions sont :  Si , alors est de la forme .  Si , alors est de la forme :   Si , alors est de la forme :   où sont des constantes arbitraires.      Fonctions harmoniques radiales   Soit une fonction réelle de classe sur . On pose, pour tout ,      Justifier que est de classe sur .    L'application est de classe sur car ses composantes le sont. Comme , et que est de classe , alors est également de classe .      Pour tout , exprimer et en fonction des dérivées partielles de .    Pour , on pose . Alors : et       Exprimer également et en fonction des dérivées partielles premières et secondes de en .    Pour , on a : et       Montrer que appartient à si et seulement si, pour tout ,     En utilisant les expressions des dérivées partielles de obtenues précédemment, on a : où . Ainsi, est harmonique si et seulement si :       Déterminer les fonctions harmoniques radiales de , c’est-à-dire les fonctions appartenant à telles que soit indépendante de .    Si est radiale, alors est indépendante de . Ainsi, l’équation harmonique se réduit à : En posant , on obtient : Cette équation différentielle a pour solution : où est une constante. En intégrant, on trouve : où est une autre constante. Ainsi, les fonctions harmoniques radiales sont de la forme : où et sont des constantes.      Soient et quatre réels tels que . Déterminer une fonction de classe sur telle que     D’après la question précédente, les fonctions harmoniques radiales sont de la forme : où et sont des constantes. En utilisant les conditions aux limites, on obtient : En résolvant ce système, on trouve : Ainsi, la fonction est donnée par :       Fonctions harmoniques à variables polaires séparables   Dans cette sous-partie, on considère deux fonctions de classe , et , et on pose      Montrer que, si n’est pas identiquement nulle, alors est -périodique.    Pour tout , on a : Donc . Comme n'est pas identiquement nulle, il existe tel que , ce qui implique que pour tout . Ainsi, est -périodique.      Montrer que, si est harmonique et non identiquement nulle sur , alors il existe un réel tel que soit solution de l’équation différentielle et soit solution de l’équation différentielle     Par la question précédente, on a : En divisant par (qui est non nul car n'est pas identiquement nulle), on obtient : Cela implique qu'il existe une constante telle que : Ainsi, et sont solutions des équations différentielles données.      Cas où    Quelles sont les solutions -périodiques de l’équation lorsque ?    Si , l’équation devient , dont les solutions sont de la forme . Pour que soit -périodique, il faut que . Ainsi, les solutions -périodiques sont les fonctions constantes .      Résoudre l’équation différentielle sur .    L’équation différentielle peut être réécrite sous la forme : En posant , on obtient : Cette équation est une équation différentielle linéaire du premier ordre, dont la solution est : où est une constante. En intégrant, on trouve : où est une autre constante. Ainsi, les solutions sont de la forme .      En déduire, dans le cas , les fonctions harmoniques à variables polaires séparables.    Dans le cas , les fonctions harmoniques à variables polaires séparables sont de la forme : où , et sont des constantes. Ainsi, les fonctions harmoniques sont de la forme : où et sont des constantes.      Cas où    Donner une condition nécessaire et suffisante pour que l’équation admette des solutions -périodiques non nulles. Donner ces solutions.    Pour que l’équation admette des solutions -périodiques non nulles, il faut que . Dans ce cas, les solutions sont de la forme : où et sont des constantes.      Résoudre l’équation différentielle sur .    L’équation différentielle est une équation d’Euler. En posant , on obtient l’équation caractéristique : Les solutions sont donc : et où et sont des constantes.      Quelles sont les solutions se prolongeant par continuité en ?    Pour que se prolonge par continuité en , il faut que reste bornée lorsque . Dans le cas , la solution ne reste bornée que si . Ainsi, les solutions prolongeables en sont de la forme : Dans le cas , aucune solution ne reste bornée en .       Principe du maximum faible   Soit un ouvert borné non vide de ( ) et de classe . Le but de cette partie est de montrer le théorème suivant, connu sous le nom de principe du maximum faible : où désigne la frontière de .    Cas où    Montrer que admet un maximum en un point .    Comme est un ouvert borné, est un fermé borné de , donc un compact. La fonction est continue sur , donc elle est bornée et atteint ses bornes. Ainsi, admet un maximum en un point .      On suppose de plus que est de classe sur et que, pour tout , . Montrer que et en déduire que , .    Supposons par l'absurde que . Comme admet un maximum en , toutes les dérivées partielles secondes de en doivent être négatives ou nulles. En particulier, , ce qui contredit l'hypothèse . Ainsi, .  Par conséquent, , , car atteint son maximum sur uniquement en des points de .      Cas général    Soit une fonction continue sur , de classe et harmonique sur . Pour tout , on pose . Montrer que est une fonction continue sur , de classe sur , et telle que , .    La fonction est continue sur car est continue et est continue. Elle est de classe sur car est de classe et est de classe .  De plus, pour tout , on a : car est harmonique et .      En déduire que , .    Par la question précédente, vérifie pour tout . D’après la partie III.A, on a : En faisant tendre , on obtient :       Soient et deux fonctions continues sur , de classe et harmoniques sur . Montrer que si les fonctions et sont égales sur , alors et sont égales sur .    Considérons la fonction . Alors est continue sur , de classe sur , et harmonique sur . De plus, sur .  Par le principe du maximum faible, on a : et Ainsi, pour tout , c’est-à-dire sur .       Fonctions harmoniques et fonctions développables en série entière   On dit qu’une fonction , définie sur et à valeurs complexes, se développe en série entière sur s’il existe une suite complexe telle que Dans toute cette partie, désigne une fonction se développant en série entière sur .    Fonctions développables en série entière    Montrer que est de classe sur et que ses dérivées partielles se développent en série entière sur . Que peut-on en déduire pour la fonction ?    La fonction se développe en série entière sur , donc elle est analytique sur . Par conséquent, est de classe sur , et en particulier de classe .  Les dérivées partielles de sont données par : et Ces séries convergent également sur , donc les dérivées partielles se développent en série entière.  On en déduit que est de classe sur .      On note et les parties réelle et imaginaire de , de sorte que, quel que soit , Montrer que et sont des fonctions harmoniques sur .    La fonction est analytique, donc elle vérifie les équations de Cauchy-Riemann : En dérivant ces équations, on obtient : En additionnant ces deux équations, on trouve : De même, on montre que . Ainsi, et sont harmoniques sur .      Propriétés des fonctions développables en série entière   On admet le résultat suivant : une fonction de dans se développe en série entière sur si et seulement si est de classe sur et pour tout ,      Montrer que si ne s’annule pas sur , alors se développe en série entière sur .    Si ne s’annule pas sur , alors est bien définie et de classe sur . De plus, comme est analytique, elle vérifie les équations de Cauchy-Riemann : En dérivant , on obtient : Ainsi, vérifie également les équations de Cauchy-Riemann et est donc développable en série entière sur .      Montrer que la fonction est harmonique sur .    On a : Comme et sont harmoniques, . De plus, les équations de Cauchy-Riemann donnent : Ainsi : Donc , et est harmonique sur .      Fonctions harmoniques et leurs primitives    Soit une fonction de dans . On suppose que est harmonique. Montrer que la fonction définie sur par se développe en série entière sur .    La fonction est harmonique, donc elle est de classe sur . Ainsi, est de classe sur . De plus, comme est harmonique, on a : En dérivant , on obtient : et En utilisant le théorème de Schwarz et l’équation harmonique, on a : Ainsi, vérifie les équations de Cauchy-Riemann et est donc développable en série entière sur .      Montrer que si appartient à , alors il existe une fonction se développant en série entière sur telle que est la partie réelle de .    D’après la question précédente, la fonction définie par se développe en série entière sur . On peut donc écrire : En intégrant terme à terme, on obtient une fonction telle que : où est une constante. La partie réelle de est alors , car : et Ainsi, est la partie réelle de .      Propriétés intégrales des fonctions harmoniques    Montrer que pour tout , on a     La fonction se développe en série entière sur , donc on peut écrire : En coordonnées polaires, on a : En intégrant sur , on obtient : Or, pour , , et pour , . Ainsi : Donc :       Montrer un résultat analogue pour les fonctions harmoniques.    Soit une fonction harmonique sur . D’après la question précédente, il existe une fonction se développant en série entière sur telle que est la partie réelle de . Ainsi, on a : car la partie réelle de l’intégrale est égale à l’intégrale de la partie réelle.      Montrer que , .    D’après la question précédente, on a : Comme , on a :       Montrer un résultat analogue pour les fonctions harmoniques.    Soit une fonction harmonique sur . D’après la question précédente, on a : car est la partie réelle d’une fonction développable en série entière.      Montrer que si admet un maximum en , alors est constante sur .    Si admet un maximum en , alors pour tout , on a : Ainsi, est constante sur . Comme est analytique, cela implique que est constante sur .      Montrer le théorème de d’Alembert-Gauss : tout polynôme complexe non constant admet au moins une racine.    Supposons par l’absurde qu’il existe un polynôme complexe non constant qui ne s’annule pas sur . Alors est une fonction entière (analytique sur tout ). Comme est non constant, lorsque , donc est bornée sur . Par le théorème de Liouville, est constante, ce qui implique que est constant, ce qui est une contradiction. Ainsi, admet au moins une racine.       Résolution du problème de Dirichlet dans le disque unité de \\(\\mathbb{R}^2\\)   Soit une fonction de dans , continue et -périodique sur . On cherche à résoudre le problème de Dirichlet sur le disque unité ; autrement dit, il s’agit de déterminer, s’il y en a, la ou les fonctions définies et continues sur (disque fermé), de classe sur , et telles que      Pour tout nombre complexe tel que , on pose où Montrer que la fonction est développable en série entière pour et calculer son développement en série entière. En déduire que la fonction est une fonction harmonique sur .    Pour , on a : En regroupant les termes, on obtient : Ainsi, la fonction est développable en série entière pour .  En prenant la partie réelle, on a : La fonction est donc une combinaison linéaire de fonctions harmoniques (les parties réelles des monômes ), donc est harmonique sur .      Montrer que, pour tout nombre complexe tel que ,     D’après le développement en série entière de , on a : En intégrant sur , les termes s’annulent pour , car : Ainsi, il reste :       Soit . Montrer que, pour tout nombre complexe tel que ,     La fonction est -périodique, donc l’intégrale de sur un intervalle de longueur est indépendante de l’origine de l’intervalle. Ainsi : Donc :       Montrer que, pour tout et tous réels et ,     En utilisant l’expression de , on a : En multipliant le numérateur et le dénominateur par , on obtient : En utilisant l’identité , on trouve :       Montrer que, pour tout et tout réel ,     Pour , le noyau de Poisson se concentre autour de , où . Ainsi, pour loin de , devient très petit. En particulier, pour , on a : Donc l’intégrale sur cet intervalle tend vers 0.      En utilisant le théorème de Heine, montrer que, pour tout , il existe tel que, pour tout nombre réel et tout nombre complexe vérifiant ,     Par le théorème de Heine, est uniformément continue sur . Ainsi, pour tout , il existe tel que : En utilisant cette propriété, on peut écrire : Le premier terme est majoré par , et le second terme est majoré par : Ainsi, on obtient l’inégalité demandée.      Montrer l’existence et l’unicité de la solution au problème de Dirichlet étudié dans cette partie.    L’existence de la solution est garantie par la construction de la fonction , qui est harmonique sur et vérifie pour tout .  Pour l’unicité, supposons que et sont deux solutions du problème de Dirichlet. Alors est harmonique sur et nulle sur le bord . Par le principe du maximum, sur , donc .      "
},
{
  "id": "centrale2018mp2-3-4-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-4-3",
  "type": "Exercice",
  "number": "1.1",
  "title": "La première question.",
  "body": "La première question   Montrer que est un sous-espace vectoriel de .    On a . La fonction nulle est harmonique. Soient et , alors est de classe et , est linéaire, donc , alors . Ainsi, est un sous-espace vectoriel de .   "
},
{
  "id": "centrale2018mp2-3-4-4",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-4-4",
  "type": "Exercice",
  "number": "1.2",
  "title": "",
  "body": "  Soit . Montrer que si est sur , alors toute dérivée partielle à tout ordre de appartient à .    On suppose que . Soit , posons . Par application du théorème de Schwartz et de la linéarité de l'opérateur dérivée partielle, on a : Donc .   "
},
{
  "id": "centrale2018mp2-3-4-5",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-4-5",
  "type": "Exercice",
  "number": "1.3",
  "title": "",
  "body": "  On suppose dans cette question que est connexe par arcs. Déterminer l'ensemble des fonctions de telles que appartienne aussi à .    Soit , alors pour tout , . En dérivant une seconde fois, on obtient : Donc : car . Ainsi, , . Comme est de classe sur , elle est différentiable sur , et étant connexe par arcs, est constante sur .   "
},
{
  "id": "centrale2018mp2-3-4-6",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-4-6",
  "type": "Exercice",
  "number": "1.4",
  "title": "",
  "body": "  Donner une fonction non constante appartenant à . Le produit de deux fonctions harmoniques est-il une fonction harmonique ?    L'application est harmonique, mais ne l'est pas. Ainsi, le produit de deux fonctions harmoniques sur n'est pas nécessairement harmonique sur .   "
},
{
  "id": "centrale2018mp2-3-5-2-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-2-3",
  "type": "Exercice",
  "number": "1.5",
  "title": "",
  "body": "  Montrer qu’il existe une constante réelle telle que et soient solutions respectives des équations et     Soit , on a : Comme est harmonique, , donc : En divisant par (qui est non nul car n'est pas identiquement nulle), on obtient : Cela implique qu'il existe une constante telle que : Ainsi, et sont solutions des équations différentielles données.   "
},
{
  "id": "centrale2018mp2-3-5-2-4",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-2-4",
  "type": "Exercice",
  "number": "1.6",
  "title": "",
  "body": "  Donner en fonction du signe de la forme des fonctions harmoniques à variables séparables.    Selon le signe de , les solutions sont :  Si , alors est de la forme .  Si , alors est de la forme :   Si , alors est de la forme :   où sont des constantes arbitraires.   "
},
{
  "id": "centrale2018mp2-3-5-3-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-3-3",
  "type": "Exercice",
  "number": "1.7",
  "title": "",
  "body": "  Justifier que est de classe sur .    L'application est de classe sur car ses composantes le sont. Comme , et que est de classe , alors est également de classe .   "
},
{
  "id": "centrale2018mp2-3-5-3-4",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-3-4",
  "type": "Exercice",
  "number": "1.8",
  "title": "",
  "body": "  Pour tout , exprimer et en fonction des dérivées partielles de .    Pour , on pose . Alors : et    "
},
{
  "id": "centrale2018mp2-3-5-3-5",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-3-5",
  "type": "Exercice",
  "number": "1.9",
  "title": "",
  "body": "  Exprimer également et en fonction des dérivées partielles premières et secondes de en .    Pour , on a : et    "
},
{
  "id": "centrale2018mp2-3-5-3-6",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-3-6",
  "type": "Exercice",
  "number": "1.10",
  "title": "",
  "body": "  Montrer que appartient à si et seulement si, pour tout ,     En utilisant les expressions des dérivées partielles de obtenues précédemment, on a : où . Ainsi, est harmonique si et seulement si :    "
},
{
  "id": "centrale2018mp2-3-5-3-7",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-3-7",
  "type": "Exercice",
  "number": "1.11",
  "title": "",
  "body": "  Déterminer les fonctions harmoniques radiales de , c’est-à-dire les fonctions appartenant à telles que soit indépendante de .    Si est radiale, alors est indépendante de . Ainsi, l’équation harmonique se réduit à : En posant , on obtient : Cette équation différentielle a pour solution : où est une constante. En intégrant, on trouve : où est une autre constante. Ainsi, les fonctions harmoniques radiales sont de la forme : où et sont des constantes.   "
},
{
  "id": "centrale2018mp2-3-5-3-8",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-3-8",
  "type": "Exercice",
  "number": "1.12",
  "title": "",
  "body": "  Soient et quatre réels tels que . Déterminer une fonction de classe sur telle que     D’après la question précédente, les fonctions harmoniques radiales sont de la forme : où et sont des constantes. En utilisant les conditions aux limites, on obtient : En résolvant ce système, on trouve : Ainsi, la fonction est donnée par :    "
},
{
  "id": "centrale2018mp2-3-5-4-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-4-3",
  "type": "Exercice",
  "number": "1.13",
  "title": "",
  "body": "  Montrer que, si n’est pas identiquement nulle, alors est -périodique.    Pour tout , on a : Donc . Comme n'est pas identiquement nulle, il existe tel que , ce qui implique que pour tout . Ainsi, est -périodique.   "
},
{
  "id": "centrale2018mp2-3-5-4-4",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-4-4",
  "type": "Exercice",
  "number": "1.14",
  "title": "",
  "body": "  Montrer que, si est harmonique et non identiquement nulle sur , alors il existe un réel tel que soit solution de l’équation différentielle et soit solution de l’équation différentielle     Par la question précédente, on a : En divisant par (qui est non nul car n'est pas identiquement nulle), on obtient : Cela implique qu'il existe une constante telle que : Ainsi, et sont solutions des équations différentielles données.   "
},
{
  "id": "centrale2018mp2-3-5-5-2",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-5-2",
  "type": "Exercice",
  "number": "1.15",
  "title": "",
  "body": "  Quelles sont les solutions -périodiques de l’équation lorsque ?    Si , l’équation devient , dont les solutions sont de la forme . Pour que soit -périodique, il faut que . Ainsi, les solutions -périodiques sont les fonctions constantes .   "
},
{
  "id": "centrale2018mp2-3-5-5-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-5-3",
  "type": "Exercice",
  "number": "1.16",
  "title": "",
  "body": "  Résoudre l’équation différentielle sur .    L’équation différentielle peut être réécrite sous la forme : En posant , on obtient : Cette équation est une équation différentielle linéaire du premier ordre, dont la solution est : où est une constante. En intégrant, on trouve : où est une autre constante. Ainsi, les solutions sont de la forme .   "
},
{
  "id": "centrale2018mp2-3-5-5-4",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-5-4",
  "type": "Exercice",
  "number": "1.17",
  "title": "",
  "body": "  En déduire, dans le cas , les fonctions harmoniques à variables polaires séparables.    Dans le cas , les fonctions harmoniques à variables polaires séparables sont de la forme : où , et sont des constantes. Ainsi, les fonctions harmoniques sont de la forme : où et sont des constantes.   "
},
{
  "id": "centrale2018mp2-3-5-6-2",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-6-2",
  "type": "Exercice",
  "number": "1.18",
  "title": "",
  "body": "  Donner une condition nécessaire et suffisante pour que l’équation admette des solutions -périodiques non nulles. Donner ces solutions.    Pour que l’équation admette des solutions -périodiques non nulles, il faut que . Dans ce cas, les solutions sont de la forme : où et sont des constantes.   "
},
{
  "id": "centrale2018mp2-3-5-6-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-6-3",
  "type": "Exercice",
  "number": "1.19",
  "title": "",
  "body": "  Résoudre l’équation différentielle sur .    L’équation différentielle est une équation d’Euler. En posant , on obtient l’équation caractéristique : Les solutions sont donc : et où et sont des constantes.   "
},
{
  "id": "centrale2018mp2-3-5-6-4",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-5-6-4",
  "type": "Exercice",
  "number": "1.20",
  "title": "",
  "body": "  Quelles sont les solutions se prolongeant par continuité en ?    Pour que se prolonge par continuité en , il faut que reste bornée lorsque . Dans le cas , la solution ne reste bornée que si . Ainsi, les solutions prolongeables en sont de la forme : Dans le cas , aucune solution ne reste bornée en .   "
},
{
  "id": "centrale2018mp2-3-6-3-2",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-6-3-2",
  "type": "Exercice",
  "number": "1.21",
  "title": "",
  "body": "  Montrer que admet un maximum en un point .    Comme est un ouvert borné, est un fermé borné de , donc un compact. La fonction est continue sur , donc elle est bornée et atteint ses bornes. Ainsi, admet un maximum en un point .   "
},
{
  "id": "centrale2018mp2-3-6-3-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-6-3-3",
  "type": "Exercice",
  "number": "1.22",
  "title": "",
  "body": "  On suppose de plus que est de classe sur et que, pour tout , . Montrer que et en déduire que , .    Supposons par l'absurde que . Comme admet un maximum en , toutes les dérivées partielles secondes de en doivent être négatives ou nulles. En particulier, , ce qui contredit l'hypothèse . Ainsi, .  Par conséquent, , , car atteint son maximum sur uniquement en des points de .   "
},
{
  "id": "centrale2018mp2-3-6-4-2",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-6-4-2",
  "type": "Exercice",
  "number": "1.23",
  "title": "",
  "body": "  Soit une fonction continue sur , de classe et harmonique sur . Pour tout , on pose . Montrer que est une fonction continue sur , de classe sur , et telle que , .    La fonction est continue sur car est continue et est continue. Elle est de classe sur car est de classe et est de classe .  De plus, pour tout , on a : car est harmonique et .   "
},
{
  "id": "centrale2018mp2-3-6-4-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-6-4-3",
  "type": "Exercice",
  "number": "1.24",
  "title": "",
  "body": "  En déduire que , .    Par la question précédente, vérifie pour tout . D’après la partie III.A, on a : En faisant tendre , on obtient :    "
},
{
  "id": "centrale2018mp2-3-6-4-4",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-6-4-4",
  "type": "Exercice",
  "number": "1.25",
  "title": "",
  "body": "  Soient et deux fonctions continues sur , de classe et harmoniques sur . Montrer que si les fonctions et sont égales sur , alors et sont égales sur .    Considérons la fonction . Alors est continue sur , de classe sur , et harmonique sur . De plus, sur .  Par le principe du maximum faible, on a : et Ainsi, pour tout , c’est-à-dire sur .   "
},
{
  "id": "centrale2018mp2-3-7-3-2",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-7-3-2",
  "type": "Exercice",
  "number": "1.26",
  "title": "",
  "body": "  Montrer que est de classe sur et que ses dérivées partielles se développent en série entière sur . Que peut-on en déduire pour la fonction ?    La fonction se développe en série entière sur , donc elle est analytique sur . Par conséquent, est de classe sur , et en particulier de classe .  Les dérivées partielles de sont données par : et Ces séries convergent également sur , donc les dérivées partielles se développent en série entière.  On en déduit que est de classe sur .   "
},
{
  "id": "centrale2018mp2-3-7-3-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-7-3-3",
  "type": "Exercice",
  "number": "1.27",
  "title": "",
  "body": "  On note et les parties réelle et imaginaire de , de sorte que, quel que soit , Montrer que et sont des fonctions harmoniques sur .    La fonction est analytique, donc elle vérifie les équations de Cauchy-Riemann : En dérivant ces équations, on obtient : En additionnant ces deux équations, on trouve : De même, on montre que . Ainsi, et sont harmoniques sur .   "
},
{
  "id": "centrale2018mp2-3-7-4-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-7-4-3",
  "type": "Exercice",
  "number": "1.28",
  "title": "",
  "body": "  Montrer que si ne s’annule pas sur , alors se développe en série entière sur .    Si ne s’annule pas sur , alors est bien définie et de classe sur . De plus, comme est analytique, elle vérifie les équations de Cauchy-Riemann : En dérivant , on obtient : Ainsi, vérifie également les équations de Cauchy-Riemann et est donc développable en série entière sur .   "
},
{
  "id": "centrale2018mp2-3-7-4-4",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-7-4-4",
  "type": "Exercice",
  "number": "1.29",
  "title": "",
  "body": "  Montrer que la fonction est harmonique sur .    On a : Comme et sont harmoniques, . De plus, les équations de Cauchy-Riemann donnent : Ainsi : Donc , et est harmonique sur .   "
},
{
  "id": "centrale2018mp2-3-7-5-2",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-7-5-2",
  "type": "Exercice",
  "number": "1.30",
  "title": "",
  "body": "  Soit une fonction de dans . On suppose que est harmonique. Montrer que la fonction définie sur par se développe en série entière sur .    La fonction est harmonique, donc elle est de classe sur . Ainsi, est de classe sur . De plus, comme est harmonique, on a : En dérivant , on obtient : et En utilisant le théorème de Schwarz et l’équation harmonique, on a : Ainsi, vérifie les équations de Cauchy-Riemann et est donc développable en série entière sur .   "
},
{
  "id": "centrale2018mp2-3-7-5-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-7-5-3",
  "type": "Exercice",
  "number": "1.31",
  "title": "",
  "body": "  Montrer que si appartient à , alors il existe une fonction se développant en série entière sur telle que est la partie réelle de .    D’après la question précédente, la fonction définie par se développe en série entière sur . On peut donc écrire : En intégrant terme à terme, on obtient une fonction telle que : où est une constante. La partie réelle de est alors , car : et Ainsi, est la partie réelle de .   "
},
{
  "id": "centrale2018mp2-3-7-6-2",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-7-6-2",
  "type": "Exercice",
  "number": "1.32",
  "title": "",
  "body": "  Montrer que pour tout , on a     La fonction se développe en série entière sur , donc on peut écrire : En coordonnées polaires, on a : En intégrant sur , on obtient : Or, pour , , et pour , . Ainsi : Donc :    "
},
{
  "id": "centrale2018mp2-3-7-6-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-7-6-3",
  "type": "Exercice",
  "number": "1.33",
  "title": "",
  "body": "  Montrer un résultat analogue pour les fonctions harmoniques.    Soit une fonction harmonique sur . D’après la question précédente, il existe une fonction se développant en série entière sur telle que est la partie réelle de . Ainsi, on a : car la partie réelle de l’intégrale est égale à l’intégrale de la partie réelle.   "
},
{
  "id": "centrale2018mp2-3-7-6-4",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-7-6-4",
  "type": "Exercice",
  "number": "1.34",
  "title": "",
  "body": "  Montrer que , .    D’après la question précédente, on a : Comme , on a :    "
},
{
  "id": "centrale2018mp2-3-7-6-5",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-7-6-5",
  "type": "Exercice",
  "number": "1.35",
  "title": "",
  "body": "  Montrer un résultat analogue pour les fonctions harmoniques.    Soit une fonction harmonique sur . D’après la question précédente, on a : car est la partie réelle d’une fonction développable en série entière.   "
},
{
  "id": "centrale2018mp2-3-7-6-6",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-7-6-6",
  "type": "Exercice",
  "number": "1.36",
  "title": "",
  "body": "  Montrer que si admet un maximum en , alors est constante sur .    Si admet un maximum en , alors pour tout , on a : Ainsi, est constante sur . Comme est analytique, cela implique que est constante sur .   "
},
{
  "id": "centrale2018mp2-3-7-6-7",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-7-6-7",
  "type": "Exercice",
  "number": "1.37",
  "title": "",
  "body": "  Montrer le théorème de d’Alembert-Gauss : tout polynôme complexe non constant admet au moins une racine.    Supposons par l’absurde qu’il existe un polynôme complexe non constant qui ne s’annule pas sur . Alors est une fonction entière (analytique sur tout ). Comme est non constant, lorsque , donc est bornée sur . Par le théorème de Liouville, est constante, ce qui implique que est constant, ce qui est une contradiction. Ainsi, admet au moins une racine.   "
},
{
  "id": "centrale2018mp2-3-8-3",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-8-3",
  "type": "Exercice",
  "number": "1.38",
  "title": "",
  "body": "  Pour tout nombre complexe tel que , on pose où Montrer que la fonction est développable en série entière pour et calculer son développement en série entière. En déduire que la fonction est une fonction harmonique sur .    Pour , on a : En regroupant les termes, on obtient : Ainsi, la fonction est développable en série entière pour .  En prenant la partie réelle, on a : La fonction est donc une combinaison linéaire de fonctions harmoniques (les parties réelles des monômes ), donc est harmonique sur .   "
},
{
  "id": "centrale2018mp2-3-8-4",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-8-4",
  "type": "Exercice",
  "number": "1.39",
  "title": "",
  "body": "  Montrer que, pour tout nombre complexe tel que ,     D’après le développement en série entière de , on a : En intégrant sur , les termes s’annulent pour , car : Ainsi, il reste :    "
},
{
  "id": "centrale2018mp2-3-8-5",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-8-5",
  "type": "Exercice",
  "number": "1.40",
  "title": "",
  "body": "  Soit . Montrer que, pour tout nombre complexe tel que ,     La fonction est -périodique, donc l’intégrale de sur un intervalle de longueur est indépendante de l’origine de l’intervalle. Ainsi : Donc :    "
},
{
  "id": "centrale2018mp2-3-8-6",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-8-6",
  "type": "Exercice",
  "number": "1.41",
  "title": "",
  "body": "  Montrer que, pour tout et tous réels et ,     En utilisant l’expression de , on a : En multipliant le numérateur et le dénominateur par , on obtient : En utilisant l’identité , on trouve :    "
},
{
  "id": "centrale2018mp2-3-8-7",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-8-7",
  "type": "Exercice",
  "number": "1.42",
  "title": "",
  "body": "  Montrer que, pour tout et tout réel ,     Pour , le noyau de Poisson se concentre autour de , où . Ainsi, pour loin de , devient très petit. En particulier, pour , on a : Donc l’intégrale sur cet intervalle tend vers 0.   "
},
{
  "id": "centrale2018mp2-3-8-8",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-8-8",
  "type": "Exercice",
  "number": "1.43",
  "title": "",
  "body": "  En utilisant le théorème de Heine, montrer que, pour tout , il existe tel que, pour tout nombre réel et tout nombre complexe vérifiant ,     Par le théorème de Heine, est uniformément continue sur . Ainsi, pour tout , il existe tel que : En utilisant cette propriété, on peut écrire : Le premier terme est majoré par , et le second terme est majoré par : Ainsi, on obtient l’inégalité demandée.   "
},
{
  "id": "centrale2018mp2-3-8-9",
  "level": "2",
  "url": "centrale2018mp2.html#centrale2018mp2-3-8-9",
  "type": "Exercice",
  "number": "1.44",
  "title": "",
  "body": "  Montrer l’existence et l’unicité de la solution au problème de Dirichlet étudié dans cette partie.    L’existence de la solution est garantie par la construction de la fonction , qui est harmonique sur et vérifie pour tout .  Pour l’unicité, supposons que et sont deux solutions du problème de Dirichlet. Alors est harmonique sur et nulle sur le bord . Par le principe du maximum, sur , donc .   "
},
{
  "id": "mines2020mp2",
  "level": "1",
  "url": "mines2020mp2.html",
  "type": "Sujet",
  "number": "2",
  "title": "concours: ccmp, session: 2020, filiere: mp, epreuve: 2",
  "body": " concours: ccmp, session: 2020, filiere: mp, epreuve: 2   L'objectif est d'étudier certains comportements asymptotiques dans une marche aléatoire. On y étudie le temps d'attente du premier retour vers l'origine ainsi que le nombre moyen de points visités par la marche. Le sujet ne se limite pas au cas d'une marche aléatoire sur mais traite aussi du cas d'une marche dans le plan.    Énoncé et corrigé   Les solutions ont été générées avec l'aide de DeepSeek-V3™, un modèle d'intelligence artificielle développé par DeepSeek. Elles seront clarifiées, voir corrigées pendant la séance dédiée.    Dans tout le texte, est un élément de . On note le -uplet dont toutes les coordonnées valent , c'est-à-dire le vecteur nul de .  On considère une variable aléatoire à valeurs dans , une suite de variables aléatoires mutuellement indépendantes suivant chacune la loi de et définies sur un même espace probabilisé. La suite de variables aléatoires est définie par et   La suite est une marche aléatoire de pas  , à valeurs dans .  On note la variable aléatoire à valeurs dans définie par   Autrement dit, est égal à si la marche aléatoire ne revient jamais en , au premier instant auquel cette marche aléatoire revient en sinon.  Pour , soit le cardinal du sous-ensemble   de . Le nombre est donc le nombre de points de visités par la marche aléatoire après pas.  Le but du problème est d'étudier asymptotiquement l'espérance de la variable aléatoire .  La partie D est indépendante des parties précédentes.     Préliminaires  Les cinq questions de cette partie sont indépendantes et utilisées dans les parties C et E.     Soit . En utilisant la factorisation , montrer que     La factorisation permet d'écrire :   En identifiant les coefficients de des deux côtés, on obtient :        Rappeler la formule de Stirling, puis déterminer un nombre réel tel que     La formule de Stirling donne :   En appliquant cette formule à , on obtient :   Ainsi, .       Si est un élément de , montrer, par exemple en utilisant une comparaison série-intégrale, que   Si est un élément de , montrer de même que     Pour , on utilise une comparaison série-intégrale. La fonction est décroissante, donc :   En calculant l'intégrale, on obtient :   On en déduit que :   Pour , on utilise une comparaison similaire :   Ainsi, on a :        Pour , on pose   Justifier, pour , la relation   Établir par ailleurs la relation   En déduire finalement un équivalent de lorsque tend vers .    On intègre par parties en posant et . On obtient :   Pour montrer que , on observe que est négligeable devant lorsque . Ainsi, l'intégrale est négligeable devant .  On en déduit que :        Pour , rappeler, sans donner de démonstration, le développement en série entière de sur . Justifier la formule :     Le développement en série entière de sur est :   Pour , on a :   En utilisant la formule des coefficients binomiaux généralisés, on obtient :   d'où :        Marches aléatoires, récurrence    On considère les fonctions et définies par les formules       Montrer que les séries entières définissant et ont un rayon de convergence supérieur ou égal à 1. Justifier alors que les fonctions et sont définies et de classe sur . Montrer que est définie et continue sur et que     Les séries entières définissant et sont de la forme avec . Par conséquent, leur rayon de convergence est au moins 1. Les fonctions et sont donc définies et de classe sur .  Pour , la série converge en car .       Si et sont des entiers naturels non nuls tels que , montrer que   En déduire que     L'événement signifie que la marche revient en pour la première fois à l'instant , puis revient à nouveau en à l'instant . Par indépendance des pas, on a :   En sommant sur , on obtient :        Montrer que   Déterminer la limite de lorsque , en discutant selon la valeur de .    En utilisant la relation de convolution des probabilités, on a :   En réorganisant les termes, on obtient :   Pour la limite de lorsque , on distingue deux cas :   Si , alors converge vers une valeur finie.  Si , alors diverge vers .        Soit une suite d'éléments de telle que la série entière ait un rayon de convergence 1 et que la série diverge. Montrer que    L'élément de étant fixé, on montrera qu'il existe tel que      La série diverge, donc pour tout , il existe un entier tel que . Pour , on a :   En choisissant suffisamment petit, on peut garantir que , ce qui montre que lorsque .       Montrer que la série est divergente si et seulement si .    Si , alors la marche revient presque sûrement en une infinité de fois, ce qui implique que diverge. Réciproquement, si diverge, alors la marche revient presque sûrement en , donc .       Pour , soit la variable de Bernoulli indicatrice de l'événement   Montrer que, pour :   En déduire que, pour :     L'événement correspond au fait que la marche visite un nouveau point à l'instant , ce qui équivaut à . Ainsi, .  En sommant sur , on obtient :        Conclure que    On pourra admettre et utiliser le théorème de Cesaro : si est une suite réelle convergeant vers le nombre réel , alors      Par le théorème de Cesaro, si , alors :   Ainsi, .       Les marches de Bernoulli sur    Dans cette question, est égal à 1 et on note donc simplement . Par ailleurs, est un élément de , et la loi de est donnée par      Pour , déterminer et justifier l'égalité :     Pour , la marche ne peut pas revenir à l'origine en un nombre impair de pas, donc .  Pour , on utilise le fait que la marche doit faire autant de pas à droite qu'à gauche. Le nombre de chemins possibles est , et chaque chemin a une probabilité . Ainsi :        Pour , donner une expression simple de . Exprimer en fonction de . Déterminer la loi de .    La fonction génératrice est donnée par :   Pour une marche de Bernoulli symétrique ( ), on a :   La probabilité que la marche ne revienne jamais à l'origine est :   La loi de est une loi géométrique modifiée, avec pour .       On suppose que . Donner un équivalent simple de lorsque tend vers . En déduire un équivalent simple de lorsque tend vers .    Pour , on a :   En utilisant la formule de Stirling, on obtient l'équivalent :   Pour , on utilise le résultat de la question 12 :        Un résultat asymptotique   Soient et deux suites d'éléments de . On suppose que est décroissante et que   On pose, pour :       Soient et deux entiers naturels tels que . Montrer que     Par définition, . Comme est décroissante, on a :   Pour la deuxième inégalité, on utilise la relation de convolution :        On suppose dans cette question qu'il existe une suite vérifiant pour assez grand et   Montrer que     En utilisant les hypothèses, on a :   Comme et , on en déduit que :        On suppose dans cette question qu'il existe tel que   En utilisant la question 17 pour une suite bien choisie, montrer que     Si , alors . En choisissant , on vérifie que :   Ainsi, d'après la question 17, on a :        La marche aléatoire simple sur     Soit . Montrer que     Cette égalité découle de la propriété de convolution des probabilités et de l'indépendance des pas de la marche aléatoire. En sommant sur tous les instants , on obtient :        Soit . Établir l'égalité     Pour une marche aléatoire simple sur , la probabilité de revenir à l'origine après pas est donnée par :   Ce résultat découle de la symétrie de la marche et de la formule des coefficients binomiaux.       Donner un équivalent simple de lorsque tend vers .    Pour une marche aléatoire simple sur , on a :   Ce résultat est un théorème classique dû à Erdős et Dvoretzky.      "
},
{
  "id": "mines2020mp2-3-2",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-2",
  "type": "Mise en garde",
  "number": "2.1",
  "title": "",
  "body": " Les solutions ont été générées avec l'aide de DeepSeek-V3™, un modèle d'intelligence artificielle développé par DeepSeek. Elles seront clarifiées, voir corrigées pendant la séance dédiée.  "
},
{
  "id": "mines2020mp2-3-4-3",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-4-3",
  "type": "Exercice",
  "number": "2.1",
  "title": "",
  "body": "  Soit . En utilisant la factorisation , montrer que     La factorisation permet d'écrire :   En identifiant les coefficients de des deux côtés, on obtient :    "
},
{
  "id": "mines2020mp2-3-4-4",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-4-4",
  "type": "Exercice",
  "number": "2.2",
  "title": "",
  "body": "  Rappeler la formule de Stirling, puis déterminer un nombre réel tel que     La formule de Stirling donne :   En appliquant cette formule à , on obtient :   Ainsi, .   "
},
{
  "id": "mines2020mp2-3-4-5",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-4-5",
  "type": "Exercice",
  "number": "2.3",
  "title": "",
  "body": "  Si est un élément de , montrer, par exemple en utilisant une comparaison série-intégrale, que   Si est un élément de , montrer de même que     Pour , on utilise une comparaison série-intégrale. La fonction est décroissante, donc :   En calculant l'intégrale, on obtient :   On en déduit que :   Pour , on utilise une comparaison similaire :   Ainsi, on a :    "
},
{
  "id": "mines2020mp2-3-4-6",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-4-6",
  "type": "Exercice",
  "number": "2.4",
  "title": "",
  "body": "  Pour , on pose   Justifier, pour , la relation   Établir par ailleurs la relation   En déduire finalement un équivalent de lorsque tend vers .    On intègre par parties en posant et . On obtient :   Pour montrer que , on observe que est négligeable devant lorsque . Ainsi, l'intégrale est négligeable devant .  On en déduit que :    "
},
{
  "id": "mines2020mp2-3-4-7",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-4-7",
  "type": "Exercice",
  "number": "2.5",
  "title": "",
  "body": "  Pour , rappeler, sans donner de démonstration, le développement en série entière de sur . Justifier la formule :     Le développement en série entière de sur est :   Pour , on a :   En utilisant la formule des coefficients binomiaux généralisés, on obtient :   d'où :    "
},
{
  "id": "mines2020mp2-3-5-3",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-5-3",
  "type": "Exercice",
  "number": "2.6",
  "title": "",
  "body": "  Montrer que les séries entières définissant et ont un rayon de convergence supérieur ou égal à 1. Justifier alors que les fonctions et sont définies et de classe sur . Montrer que est définie et continue sur et que     Les séries entières définissant et sont de la forme avec . Par conséquent, leur rayon de convergence est au moins 1. Les fonctions et sont donc définies et de classe sur .  Pour , la série converge en car .   "
},
{
  "id": "mines2020mp2-3-5-4",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-5-4",
  "type": "Exercice",
  "number": "2.7",
  "title": "",
  "body": "  Si et sont des entiers naturels non nuls tels que , montrer que   En déduire que     L'événement signifie que la marche revient en pour la première fois à l'instant , puis revient à nouveau en à l'instant . Par indépendance des pas, on a :   En sommant sur , on obtient :    "
},
{
  "id": "mines2020mp2-3-5-5",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-5-5",
  "type": "Exercice",
  "number": "2.8",
  "title": "",
  "body": "  Montrer que   Déterminer la limite de lorsque , en discutant selon la valeur de .    En utilisant la relation de convolution des probabilités, on a :   En réorganisant les termes, on obtient :   Pour la limite de lorsque , on distingue deux cas :   Si , alors converge vers une valeur finie.  Si , alors diverge vers .    "
},
{
  "id": "mines2020mp2-3-5-6",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-5-6",
  "type": "Exercice",
  "number": "2.9",
  "title": "",
  "body": "  Soit une suite d'éléments de telle que la série entière ait un rayon de convergence 1 et que la série diverge. Montrer que    L'élément de étant fixé, on montrera qu'il existe tel que      La série diverge, donc pour tout , il existe un entier tel que . Pour , on a :   En choisissant suffisamment petit, on peut garantir que , ce qui montre que lorsque .   "
},
{
  "id": "mines2020mp2-3-5-7",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-5-7",
  "type": "Exercice",
  "number": "2.10",
  "title": "",
  "body": "  Montrer que la série est divergente si et seulement si .    Si , alors la marche revient presque sûrement en une infinité de fois, ce qui implique que diverge. Réciproquement, si diverge, alors la marche revient presque sûrement en , donc .   "
},
{
  "id": "mines2020mp2-3-5-8",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-5-8",
  "type": "Exercice",
  "number": "2.11",
  "title": "",
  "body": "  Pour , soit la variable de Bernoulli indicatrice de l'événement   Montrer que, pour :   En déduire que, pour :     L'événement correspond au fait que la marche visite un nouveau point à l'instant , ce qui équivaut à . Ainsi, .  En sommant sur , on obtient :    "
},
{
  "id": "mines2020mp2-3-5-9",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-5-9",
  "type": "Exercice",
  "number": "2.12",
  "title": "",
  "body": "  Conclure que    On pourra admettre et utiliser le théorème de Cesaro : si est une suite réelle convergeant vers le nombre réel , alors      Par le théorème de Cesaro, si , alors :   Ainsi, .   "
},
{
  "id": "mines2020mp2-3-6-3",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-6-3",
  "type": "Exercice",
  "number": "2.13",
  "title": "",
  "body": "  Pour , déterminer et justifier l'égalité :     Pour , la marche ne peut pas revenir à l'origine en un nombre impair de pas, donc .  Pour , on utilise le fait que la marche doit faire autant de pas à droite qu'à gauche. Le nombre de chemins possibles est , et chaque chemin a une probabilité . Ainsi :    "
},
{
  "id": "mines2020mp2-3-6-4",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-6-4",
  "type": "Exercice",
  "number": "2.14",
  "title": "",
  "body": "  Pour , donner une expression simple de . Exprimer en fonction de . Déterminer la loi de .    La fonction génératrice est donnée par :   Pour une marche de Bernoulli symétrique ( ), on a :   La probabilité que la marche ne revienne jamais à l'origine est :   La loi de est une loi géométrique modifiée, avec pour .   "
},
{
  "id": "mines2020mp2-3-6-5",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-6-5",
  "type": "Exercice",
  "number": "2.15",
  "title": "",
  "body": "  On suppose que . Donner un équivalent simple de lorsque tend vers . En déduire un équivalent simple de lorsque tend vers .    Pour , on a :   En utilisant la formule de Stirling, on obtient l'équivalent :   Pour , on utilise le résultat de la question 12 :    "
},
{
  "id": "mines2020mp2-3-7-3",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-7-3",
  "type": "Exercice",
  "number": "2.16",
  "title": "",
  "body": "  Soient et deux entiers naturels tels que . Montrer que     Par définition, . Comme est décroissante, on a :   Pour la deuxième inégalité, on utilise la relation de convolution :    "
},
{
  "id": "mines2020mp2-3-7-4",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-7-4",
  "type": "Exercice",
  "number": "2.17",
  "title": "",
  "body": "  On suppose dans cette question qu'il existe une suite vérifiant pour assez grand et   Montrer que     En utilisant les hypothèses, on a :   Comme et , on en déduit que :    "
},
{
  "id": "mines2020mp2-3-7-5",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-7-5",
  "type": "Exercice",
  "number": "2.18",
  "title": "",
  "body": "  On suppose dans cette question qu'il existe tel que   En utilisant la question 17 pour une suite bien choisie, montrer que     Si , alors . En choisissant , on vérifie que :   Ainsi, d'après la question 17, on a :    "
},
{
  "id": "mines2020mp2-3-8-2",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-8-2",
  "type": "Exercice",
  "number": "2.19",
  "title": "",
  "body": "  Soit . Montrer que     Cette égalité découle de la propriété de convolution des probabilités et de l'indépendance des pas de la marche aléatoire. En sommant sur tous les instants , on obtient :    "
},
{
  "id": "mines2020mp2-3-8-3",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-8-3",
  "type": "Exercice",
  "number": "2.20",
  "title": "",
  "body": "  Soit . Établir l'égalité     Pour une marche aléatoire simple sur , la probabilité de revenir à l'origine après pas est donnée par :   Ce résultat découle de la symétrie de la marche et de la formule des coefficients binomiaux.   "
},
{
  "id": "mines2020mp2-3-8-4",
  "level": "2",
  "url": "mines2020mp2.html#mines2020mp2-3-8-4",
  "type": "Exercice",
  "number": "2.21",
  "title": "",
  "body": "  Donner un équivalent simple de lorsque tend vers .    Pour une marche aléatoire simple sur , on a :   Ce résultat est un théorème classique dû à Erdős et Dvoretzky.   "
},
{
  "id": "mines2024mp2",
  "level": "1",
  "url": "mines2024mp2.html",
  "type": "Sujet",
  "number": "3",
  "title": "concours: ccmp, session: 2024, filiere: mp, epreuve: 1",
  "body": " concours: ccmp, session: 2024, filiere: mp, epreuve: 1   Les solutions ont été générées avec l'aide de DeepSeek-V3™, un modèle d'intelligence artificielle développé par DeepSeek avec une exigence de fournir des solutions détaillées. Les réponses seront optimisées, voir corrigées durant la séance    L'objectif est d'établir certaines identités à base d'intégrales à paramètres et de sommes de séries de fonctions et ensuite de les utiliser de manière originale dans le calcul de l'espérence d'une variable aléatoire.   Généralisation d’une intégrale de Dirichlet et application   Le but de ce sujet est de calculer l’intégrale de Dirichlet généralisée et d’utiliser ce calcul pour évaluer une espérance.    Calcul d’une intégrale   Dans cette partie, on fixe .      Montrer que pour tout , la fonction définie par est définie et intégrable sur .    Pour montrer que est définie et intégrable sur , on procède en deux étapes :    Définie sur : La fonction est définie pour tout car le dénominateur ne s'annule pas. En effet, pour et , on a (car est un nombre complexe de module et ne peut pas annuler le ).  Intégrable sur : Pour montrer l'intégrabilité, on étudie le comportement de aux bornes de l'intervalle :  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement supérieur à , ce qui garantit que est intégrable au voisinage de .  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement inférieur à , ce qui garantit que est intégrable au voisinage de .      Ainsi, est bien définie et intégrable sur .    La justification du fait que soit bien définie n'est pas très claire. Le reste est correct.  Si alors si et seulement si . Le nombre serait alors un réel négatif. Ce qui n'est possible que si , ce qui est exclu puisque .       Soit la fonction définie par Montrer que la fonction est de classe sur et que :    soit , montrer que pour tout et ,     Pour montrer que est de classe , on utilise le théorème de dérivation sous le signe intégral. On vérifie les hypothèses suivantes :  Continuité de l'intégrande : La fonction est continue en pour tout .  Dérivabilité par rapport à : La dérivée partielle de l'intégrande par rapport à est : Cette dérivée est continue en et en .  Domination : Pour tout avec , on a : Cela permet de majorer la dérivée partielle par une fonction intégrable en , ce qui justifie l'application du théorème de dérivation sous le signe intégral.    Ainsi, est de classe sur , et sa dérivée est donnée par :     Des imprécisions sur les propriétés à vérifier de la fonction . La domination est correcte mais manque de détails. Vu la générécité de ce genre de questions, en voilà une rédaction alternative :  Considérons la fonction   est de classe sur par opérations usuelles sur les fonctions de classe donc les fonctions partielles et sont continues pour tout et et sont continues pour tout . Par ailleurs     les intégrales sont convergentes d'après la question précédentes.   Soit comme suggéré par l'indication de l'énoncé . Fixons  La fonction est décroissante sur donc ce qui amène, par parité de la fonction  On en déduit que La fonction est continue et elle est intégrable sur car avec et .     Toutes les hypothèses sont réunies pour pouvoir appliquer la formule de Leibniz sur l'intervalle . Le réel étant quelconque dans on conclut que  La fonction est de classe sur et        Soit la fonction définie par Montrer que la fonction est de classe sur et que pour tout  où est la fonction définie par   Calculer et En déduire que la fonction est constante sur .      Classe de : La fonction est le produit de deux fonctions de classe :   est de classe car elle est exponentielle.  est de classe d'après la question précédente.  Ainsi, est de classe sur .  Calcul de : En dérivant , on obtient : En utilisant l'expression de trouvée à la question précédente, on a : En simplifiant, on obtient : où .  Calcul de et :   En , on a .  En , on a . Comme , on a , donc .    Constance de : On a montré que pour tout . Ainsi, est constante sur cet intervalle.        Montrer que pour tout        Expression de : On utilise la définition de et la relation trigonométrique . Ainsi : En développant, on obtient :   Expression intégrale : En utilisant l'expression de , on a : Cela découle d'une manipulation algébrique du dénominateur et de l'utilisation de la parité de la fonction.        En déduire que : où .      Changement de variable : On effectue le changement de variable . Ainsi, , et .  Transformation de l'intégrale : En substituant dans l'intégrale, on obtient :   Conclusion : On en déduit que :         Montrer, en utilisant le théorème de convergence dominée, que :       Application du théorème de convergence dominée : Lorsque , on a . Ainsi, l'intégrale devient :   Justification de la convergence : La fonction intégrée est dominée par , qui est intégrable sur . Par le théorème de convergence dominée, on peut intervertir limite et intégrale.        En déduire que       Évaluation de la limite : D'après la question précédente, on a :   Expression de : Comme est constante (d'après la question 3), on a :   Conclusion : En utilisant la définition de , on obtient :         Une expression (utile) de la fonction sinus   On rappelle que est un élément de fixé.     Montrer que       Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Changement de variable dans la seconde intégrale : Dans la seconde intégrale, on effectue le changement de variable . Ainsi, et . Les bornes deviennent à , et on obtient :   Conclusion : En combinant les deux intégrales, on obtient :         Montrer que :       Développement en série géométrique : On utilise le développement en série géométrique de pour :   Intégration terme à terme : En multipliant par et en intégrant terme à terme, on obtient :   Calcul des intégrales : Chaque intégrale vaut :   Conclusion : Ainsi, on a :         Établir l’identité       Utilisation de la question 8 : D'après la question 8, on a :   Développement en série des deux termes : En utilisant le développement en série géométrique pour chaque terme, on obtient :    Conclusion : En additionnant les deux séries, on obtient l'identité souhaitée :         En déduire que l’on a       Utilisation de la question 7 : D'après la question 7, on a :   Expression de la série : En utilisant l'identité de la question 10, on peut écrire :   Simplification de la série : En regroupant les termes et en simplifiant, on obtient :         En déduire enfin que :       Substitution de : On pose , ce qui donne . En substituant dans l'identité de la question 11, on obtient :   Simplification : En multipliant par et en réarrangeant les termes, on obtient :         Calcul d'une intégrale de Dirichlet généralisée    Montrer que l’intégrale converge et que :       Convergence de l'intégrale : L'intégrale converge car :  En , le numérateur se comporte comme , donc l'intégrande est équivalente à , qui est intégrable.  En , l'intégrande est dominée par , qui est intégrable.    Transformation de l'intégrale : En intégrant par parties, on pose : Ainsi, et . L'intégration par parties donne :         Montrer que pour tout :       Changement de variable : On effectue le changement de variable . Ainsi, , et . Les bornes deviennent à .  Simplification de l'intégrande : En utilisant la périodicité de et , on a :  Ainsi, l'intégrale devient :   Transformation en intégrale sur : En utilisant la symétrie de la fonction cosinus et sinus, on peut réécrire l'intégrale sur :         En déduire que :       Sommation des intégrales : En sommant les intégrales sur chaque intervalle , on obtient :   Utilisation de la question 14 : En utilisant le résultat de la question 14, on peut réécrire chaque intégrale comme :   Conclusion : Ainsi, on a :         En déduire que :       Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Utilisation de la question 15 : En utilisant le résultat de la question 15, on peut réécrire la seconde intégrale comme :   Simplification : En combinant les deux intégrales, on obtient :         Calcul de   Toutes les variables aléatoires sont définies sur un même espace probabilisé .  Soient des variables aléatoires indépendantes, de même loi donnée par : Pour tout , on note .     Déterminer, pour tout , et .      Espérance de : Comme les sont indépendantes et de même loi, on a : Or, , donc :   Variance de : La variance de est donnée par : Or, , donc :         Soient et deux variables aléatoires indépendantes prenant toutes deux un nombre fini de valeurs réelles. On suppose que et suivent la même loi.  Montrer que :       Indépendance de et : Comme et sont indépendantes, on a :   Linéarité de l'espérance : En utilisant la linéarité de l'espérance, on obtient :   Symétrie de et : Comme et suivent la même loi, on a . Ainsi, , et il reste :   Conclusion : Comme et sont indépendantes, on a : Ainsi, on obtient :         En déduire que pour tout , et pour tout :       Récurrence sur : On procède par récurrence sur .  Cas de base : Pour , on a , donc : Comme prend les valeurs avec probabilité , on a : Ainsi, la propriété est vraie pour .  Hérédité : Supposons que la propriété est vraie pour un certain , c'est-à-dire : On montre qu'elle est vraie pour . On a : Comme et sont indépendantes, on peut appliquer la question 20 : D'après l'hypothèse de récurrence et le cas de base, on a : Ainsi, la propriété est vraie pour .  Conclusion : Par récurrence, la propriété est vraie pour tout .        Soient tels que et . Montrer que : où pour réel non nul. En déduire que :       Preuve de : Si , alors . Si , alors .  Application à et : On a . Comme , on peut appliquer la formule précédente : En prenant l'espérance, on obtient : Comme est indépendante de et , on a :         Montrer que pour tout :       Cas : Si , alors , donc l'intégrale est nulle, ce qui correspond à .  Cas : On effectue le changement de variable , ce qui donne et . Ainsi, l'intégrale devient :   Calcul de l'intégrale : On sait que : Ainsi, on obtient :         En déduire que pour tout :       Expression de : On utilise la relation entre l'espérance de la valeur absolue et l'intégrale de la fonction caractéristique. Pour une variable aléatoire , on a : où est la fonction caractéristique de .  Application à : La fonction caractéristique de est donnée par : Ainsi, on a :         Conclure que :       Utilisation de la question 24 : D'après la question 24, on a :   Calcul de l'intégrale pour et : En utilisant les résultats des parties précédentes, on peut montrer que :    Conclusion : En combinant ces résultats, on obtient :         "
},
{
  "id": "mines2024mp2-2",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-2",
  "type": "Mise en garde",
  "number": "3.1",
  "title": "",
  "body": " Les solutions ont été générées avec l'aide de DeepSeek-V3™, un modèle d'intelligence artificielle développé par DeepSeek avec une exigence de fournir des solutions détaillées. Les réponses seront optimisées, voir corrigées durant la séance  "
},
{
  "id": "mines2024mp2-4-3-3",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-3-3",
  "type": "Exercice",
  "number": "3.1",
  "title": "",
  "body": "  Montrer que pour tout , la fonction définie par est définie et intégrable sur .    Pour montrer que est définie et intégrable sur , on procède en deux étapes :    Définie sur : La fonction est définie pour tout car le dénominateur ne s'annule pas. En effet, pour et , on a (car est un nombre complexe de module et ne peut pas annuler le ).  Intégrable sur : Pour montrer l'intégrabilité, on étudie le comportement de aux bornes de l'intervalle :  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement supérieur à , ce qui garantit que est intégrable au voisinage de .  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement inférieur à , ce qui garantit que est intégrable au voisinage de .      Ainsi, est bien définie et intégrable sur .    La justification du fait que soit bien définie n'est pas très claire. Le reste est correct.  Si alors si et seulement si . Le nombre serait alors un réel négatif. Ce qui n'est possible que si , ce qui est exclu puisque .   "
},
{
  "id": "mines2024mp2-4-3-4",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-3-4",
  "type": "Exercice",
  "number": "3.2",
  "title": "",
  "body": "  Soit la fonction définie par Montrer que la fonction est de classe sur et que :    soit , montrer que pour tout et ,     Pour montrer que est de classe , on utilise le théorème de dérivation sous le signe intégral. On vérifie les hypothèses suivantes :  Continuité de l'intégrande : La fonction est continue en pour tout .  Dérivabilité par rapport à : La dérivée partielle de l'intégrande par rapport à est : Cette dérivée est continue en et en .  Domination : Pour tout avec , on a : Cela permet de majorer la dérivée partielle par une fonction intégrable en , ce qui justifie l'application du théorème de dérivation sous le signe intégral.    Ainsi, est de classe sur , et sa dérivée est donnée par :     Des imprécisions sur les propriétés à vérifier de la fonction . La domination est correcte mais manque de détails. Vu la générécité de ce genre de questions, en voilà une rédaction alternative :  Considérons la fonction   est de classe sur par opérations usuelles sur les fonctions de classe donc les fonctions partielles et sont continues pour tout et et sont continues pour tout . Par ailleurs     les intégrales sont convergentes d'après la question précédentes.   Soit comme suggéré par l'indication de l'énoncé . Fixons  La fonction est décroissante sur donc ce qui amène, par parité de la fonction  On en déduit que La fonction est continue et elle est intégrable sur car avec et .     Toutes les hypothèses sont réunies pour pouvoir appliquer la formule de Leibniz sur l'intervalle . Le réel étant quelconque dans on conclut que  La fonction est de classe sur et    "
},
{
  "id": "mines2024mp2-4-3-5",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-3-5",
  "type": "Exercice",
  "number": "3.3",
  "title": "",
  "body": "  Soit la fonction définie par Montrer que la fonction est de classe sur et que pour tout  où est la fonction définie par   Calculer et En déduire que la fonction est constante sur .      Classe de : La fonction est le produit de deux fonctions de classe :   est de classe car elle est exponentielle.  est de classe d'après la question précédente.  Ainsi, est de classe sur .  Calcul de : En dérivant , on obtient : En utilisant l'expression de trouvée à la question précédente, on a : En simplifiant, on obtient : où .  Calcul de et :   En , on a .  En , on a . Comme , on a , donc .    Constance de : On a montré que pour tout . Ainsi, est constante sur cet intervalle.     "
},
{
  "id": "mines2024mp2-4-3-6",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-3-6",
  "type": "Exercice",
  "number": "3.4",
  "title": "",
  "body": "  Montrer que pour tout        Expression de : On utilise la définition de et la relation trigonométrique . Ainsi : En développant, on obtient :   Expression intégrale : En utilisant l'expression de , on a : Cela découle d'une manipulation algébrique du dénominateur et de l'utilisation de la parité de la fonction.     "
},
{
  "id": "mines2024mp2-4-3-7",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-3-7",
  "type": "Exercice",
  "number": "3.5",
  "title": "",
  "body": "  En déduire que : où .      Changement de variable : On effectue le changement de variable . Ainsi, , et .  Transformation de l'intégrale : En substituant dans l'intégrale, on obtient :   Conclusion : On en déduit que :      "
},
{
  "id": "mines2024mp2-4-3-8",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-3-8",
  "type": "Exercice",
  "number": "3.6",
  "title": "",
  "body": "  Montrer, en utilisant le théorème de convergence dominée, que :       Application du théorème de convergence dominée : Lorsque , on a . Ainsi, l'intégrale devient :   Justification de la convergence : La fonction intégrée est dominée par , qui est intégrable sur . Par le théorème de convergence dominée, on peut intervertir limite et intégrale.     "
},
{
  "id": "mines2024mp2-4-3-9",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-3-9",
  "type": "Exercice",
  "number": "3.7",
  "title": "",
  "body": "  En déduire que       Évaluation de la limite : D'après la question précédente, on a :   Expression de : Comme est constante (d'après la question 3), on a :   Conclusion : En utilisant la définition de , on obtient :      "
},
{
  "id": "mines2024mp2-4-4-3",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-4-3",
  "type": "Exercice",
  "number": "3.8",
  "title": "",
  "body": "  Montrer que       Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Changement de variable dans la seconde intégrale : Dans la seconde intégrale, on effectue le changement de variable . Ainsi, et . Les bornes deviennent à , et on obtient :   Conclusion : En combinant les deux intégrales, on obtient :      "
},
{
  "id": "mines2024mp2-4-4-4",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-4-4",
  "type": "Exercice",
  "number": "3.9",
  "title": "",
  "body": "  Montrer que :       Développement en série géométrique : On utilise le développement en série géométrique de pour :   Intégration terme à terme : En multipliant par et en intégrant terme à terme, on obtient :   Calcul des intégrales : Chaque intégrale vaut :   Conclusion : Ainsi, on a :      "
},
{
  "id": "mines2024mp2-4-4-5",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-4-5",
  "type": "Exercice",
  "number": "3.10",
  "title": "",
  "body": "  Établir l’identité       Utilisation de la question 8 : D'après la question 8, on a :   Développement en série des deux termes : En utilisant le développement en série géométrique pour chaque terme, on obtient :    Conclusion : En additionnant les deux séries, on obtient l'identité souhaitée :      "
},
{
  "id": "mines2024mp2-4-4-6",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-4-6",
  "type": "Exercice",
  "number": "3.11",
  "title": "",
  "body": "  En déduire que l’on a       Utilisation de la question 7 : D'après la question 7, on a :   Expression de la série : En utilisant l'identité de la question 10, on peut écrire :   Simplification de la série : En regroupant les termes et en simplifiant, on obtient :      "
},
{
  "id": "mines2024mp2-4-4-7",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-4-7",
  "type": "Exercice",
  "number": "3.12",
  "title": "",
  "body": "  En déduire enfin que :       Substitution de : On pose , ce qui donne . En substituant dans l'identité de la question 11, on obtient :   Simplification : En multipliant par et en réarrangeant les termes, on obtient :      "
},
{
  "id": "mines2024mp2-4-5-2",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-5-2",
  "type": "Exercice",
  "number": "3.13",
  "title": "",
  "body": "  Montrer que l’intégrale converge et que :       Convergence de l'intégrale : L'intégrale converge car :  En , le numérateur se comporte comme , donc l'intégrande est équivalente à , qui est intégrable.  En , l'intégrande est dominée par , qui est intégrable.    Transformation de l'intégrale : En intégrant par parties, on pose : Ainsi, et . L'intégration par parties donne :      "
},
{
  "id": "mines2024mp2-4-5-3",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-5-3",
  "type": "Exercice",
  "number": "3.14",
  "title": "",
  "body": "  Montrer que pour tout :       Changement de variable : On effectue le changement de variable . Ainsi, , et . Les bornes deviennent à .  Simplification de l'intégrande : En utilisant la périodicité de et , on a :  Ainsi, l'intégrale devient :   Transformation en intégrale sur : En utilisant la symétrie de la fonction cosinus et sinus, on peut réécrire l'intégrale sur :      "
},
{
  "id": "mines2024mp2-4-5-4",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-5-4",
  "type": "Exercice",
  "number": "3.15",
  "title": "",
  "body": "  En déduire que :       Sommation des intégrales : En sommant les intégrales sur chaque intervalle , on obtient :   Utilisation de la question 14 : En utilisant le résultat de la question 14, on peut réécrire chaque intégrale comme :   Conclusion : Ainsi, on a :      "
},
{
  "id": "mines2024mp2-4-5-5",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-5-5",
  "type": "Exercice",
  "number": "3.16",
  "title": "",
  "body": "  En déduire que :       Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Utilisation de la question 15 : En utilisant le résultat de la question 15, on peut réécrire la seconde intégrale comme :   Simplification : En combinant les deux intégrales, on obtient :      "
},
{
  "id": "mines2024mp2-4-6-3",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-6-3",
  "type": "Exercice",
  "number": "3.17",
  "title": "",
  "body": "  Déterminer, pour tout , et .      Espérance de : Comme les sont indépendantes et de même loi, on a : Or, , donc :   Variance de : La variance de est donnée par : Or, , donc :      "
},
{
  "id": "mines2024mp2-4-6-4",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-6-4",
  "type": "Exercice",
  "number": "3.18",
  "title": "",
  "body": "  Soient et deux variables aléatoires indépendantes prenant toutes deux un nombre fini de valeurs réelles. On suppose que et suivent la même loi.  Montrer que :       Indépendance de et : Comme et sont indépendantes, on a :   Linéarité de l'espérance : En utilisant la linéarité de l'espérance, on obtient :   Symétrie de et : Comme et suivent la même loi, on a . Ainsi, , et il reste :   Conclusion : Comme et sont indépendantes, on a : Ainsi, on obtient :      "
},
{
  "id": "mines2024mp2-4-6-5",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-6-5",
  "type": "Exercice",
  "number": "3.19",
  "title": "",
  "body": "  En déduire que pour tout , et pour tout :       Récurrence sur : On procède par récurrence sur .  Cas de base : Pour , on a , donc : Comme prend les valeurs avec probabilité , on a : Ainsi, la propriété est vraie pour .  Hérédité : Supposons que la propriété est vraie pour un certain , c'est-à-dire : On montre qu'elle est vraie pour . On a : Comme et sont indépendantes, on peut appliquer la question 20 : D'après l'hypothèse de récurrence et le cas de base, on a : Ainsi, la propriété est vraie pour .  Conclusion : Par récurrence, la propriété est vraie pour tout .     "
},
{
  "id": "mines2024mp2-4-6-6",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-6-6",
  "type": "Exercice",
  "number": "3.20",
  "title": "",
  "body": "  Soient tels que et . Montrer que : où pour réel non nul. En déduire que :       Preuve de : Si , alors . Si , alors .  Application à et : On a . Comme , on peut appliquer la formule précédente : En prenant l'espérance, on obtient : Comme est indépendante de et , on a :      "
},
{
  "id": "mines2024mp2-4-6-7",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-6-7",
  "type": "Exercice",
  "number": "3.21",
  "title": "",
  "body": "  Montrer que pour tout :       Cas : Si , alors , donc l'intégrale est nulle, ce qui correspond à .  Cas : On effectue le changement de variable , ce qui donne et . Ainsi, l'intégrale devient :   Calcul de l'intégrale : On sait que : Ainsi, on obtient :      "
},
{
  "id": "mines2024mp2-4-6-8",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-6-8",
  "type": "Exercice",
  "number": "3.22",
  "title": "",
  "body": "  En déduire que pour tout :       Expression de : On utilise la relation entre l'espérance de la valeur absolue et l'intégrale de la fonction caractéristique. Pour une variable aléatoire , on a : où est la fonction caractéristique de .  Application à : La fonction caractéristique de est donnée par : Ainsi, on a :      "
},
{
  "id": "mines2024mp2-4-6-9",
  "level": "2",
  "url": "mines2024mp2.html#mines2024mp2-4-6-9",
  "type": "Exercice",
  "number": "3.23",
  "title": "",
  "body": "  Conclure que :       Utilisation de la question 24 : D'après la question 24, on a :   Calcul de l'intégrale pour et : En utilisant les résultats des parties précédentes, on peut montrer que :    Conclusion : En combinant ces résultats, on obtient :      "
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
