﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * File Name: fr.js
 * 	French language file.
 * 
 * File Author:
 * 	  Platoon21 (charlesprost@gmail.com) and Zempashi
 *    Nicobubulle (nicobubulle@gmail.com) for ruTorrent
 */
 
 var theUILang =
 {
 //all used
 kbs				: "ko/s",
 
 
 //Settings window
 
 General			: "Général",
 Downloads			: "Téléchargement",
 Connection			: "Connexion",
 BitTorrent			: "BitTorrent",
 Queueing			: "File d'attente",
 Scheduler			: "Planificateur",
 Advanced			: "Avancé",
 Disk_Cache			: "Cache disque",
 Enable_Web_Interface : "Activer le plugin WebUI",
 Authent			: "Authentification",
 Username			: "Identifiant",
 Password			: "Mot de passe",
 Enable_Guest_acc	: "Autoriser le compte invité avec comme identifiant",
 Connectivity		: "Connectivité",
 Alt_list_port		: "Port d'écoute alternatif (port BitTorrent par défaut)",
 Rest_access		: "Accès restreint aux adresses IPs suivantes : (les séparer avec une virgule)",
 User_Interface		: "Interface",
 Confirm_del_torr	: "Confirmer la suppression des torrents",
 Update_GUI_every	: "Fréq. des MAJ de l'UI",
 ms					: "ms",
 Alt_list_bckgnd	: "Couleurs alternées pour la liste",
 Show_speed			: "Où afficher la barre de progression?",
 Don_t				: "Nulle part",
 In_status_bar		: "Dans la barre d'état",
 In_title_bar		: "Dans la barre de titre",
 Show_cat_start		: "Afficher les catégories au démarrage",
 Show_det_start		: "Afficher les détails au démarrage",
 Restor_def			: "Rétablir par défaut",
 When_add_torrent	: "Quand des torrents sont ajoutés",
 Dnt_start_down_auto: "Afficher une demande de confirmation",
 Other_sett			: "Autres options",
 Append_ut_incompl	: "Rajouter l'extension .!ut aux fichiers incomplets",
 Prealloc_all_files	: "Préallouer tous les fichiers",
 Prev_stnd_w_act_con: "Empêcher la fermeture si des torrents sont en cours d'utilisation",
 Listening_Port		: "Port d'écoute",
 Port_f_incom_conns	: "Port utilisé pour les connexions entrantes",
 Random_Port		: "Port aléatoire",
 Rnd_port_torr_start: "Sélection aléatoire du port à chaque fois que rTorrent démarre",
 En_UPnP_mapp		: "Activer le mappage de port UPnP",
 Add_torr_mustdie_f	: "Ajouter rTorrent aux exceptions du Pare-feu de XP (SP2 ou ultérieur)",
 Proxy_Server		: "Serveur proxy",
 Type				: "Type",
 none				: "(aucun)",
 Proxy				: "Proxy",
 Port				: "Port",
 Use_proxy_4_p2p_con: "Utiliser un serveur proxy pour les connexions en P2P",
 Bandwidth_Limiting : "Limitation de la bande passante",
 Global_max_upl		: "Taux maximum en émission",
 unlimited			: "illimité",
 Alt_down_r_downl	: "Taux d'émission alternatif sans téléchargement",
 Glob_max_downl		: "Taux maximum en réception",
 Num_of_conn		: "Nombre de connexions",
 Glob_max_conn		: "Nombre maximum global de connexions",
 Max_conn_peer_torr	: "Nombre maximum de clients par torrent",
 Num_upl_slots		: "Nombre de slots d'émission par torrent",
 Extra_ulslots		: "Ajouter des slots d'émission lorsque le taux d'émission est < 90%",
 Add_bittor_featrs	: "Fonctions BitTorrent supplémentaires",
 En_DHT_ntw			: "Activer le support réseau des DHT",
 Ask_scrape			: "Infos de Scrape par le Tracker",
 En_DHT_new_torrs	: "Activer DHT pour les nouveaux torrents",
 Peer_exch			: "Activer l'échange de client",
 Ip_report_track	: "IP/Nom d'hôte à rapporter au Tracker",
 Protocol_enc		: "Protocole d'encryptage",
 Outgoing			: "Sortant",
 Disabled			: "Désactivé",
 Enabled			: "Activé",
 Forced				: "Forcé",
 All_inc_legacy_conn: "Autoriser les connexions entrantes héritées",
 Queue_sett			: "Options de la file d'attente",
 Max_n_act_torrs	: "Nombre maximum de torrents actifs (émission et réception)",
 Max_num_act_downl	: "Nombre maximum de téléchargements actifs",
 Seed_while			: "Paramètres de partage [Valeurs par défaut]",
 Ratio_is			: "Par ratio",
 or_time_is			: " % ou en temps",
 Ignore				: "(Ignoré)",
 nin_min			: "90 minutes",
 two_h				: "2 heures",
 three_h			: "3 heures",
 four_h				: "4 heures",
 five_h				: "5 heures",
 six_h				: "6 heures",
 seven_h			: "7 heures",
 eight_h			: "8 heures",
 nine_h				: "9 heures",
 ten_h				: "10 heures",
 twelve_h			: "12 heures",
 sixteen_h			: "16 heures",
 twenty_h			: "20 heures",
 tw_four_h			: "24 heures",
 thirty_h			: "30 heures",
 thirty_six_h		: "36 heures",
 forty_eight_h		: "48 heures",
 sixty_h			: "60 heures",
 sev_two_h			: "72 heures",
 nin_six_h			: "96 heures",
 Seed_prior			: "Donner la priorité aux tâches de partage",
 When_torr_reach	: "Définition des limites de partage",
 Limit_upl_rate		: "Limiter l'émission à ... [0 = stop]",
 En_shedul			: "Activer le planificateur",
 Shed_sett			: "Options du planificateur",
 Lim_upl_rate		: "Taux d'émission limité",
 Lim_dow_rate		: "Taux de réception limité",
 Dis_DHT_when_t_off	: "Désactiver les DHT à l'arrêt",
 Disc_cahe			: "Cache disque",
 Disc_cahe_bla_bla	: "Le cache disque est nécessaire pour accéder fréquemment aux données en mémoire afin de réduire le nombre de lectures et d'écritures sur le disque dur. Vous pouvez modifier son comportement en modifiant les quelques paramètres ci-dessous.",
 Overwr_d_cahe_au	: "Définir manuellement la taille du cache",
 MB					: "Mo",
 Red_mem_usage		: "Réduire l'usage de la mémoire lorsque le cache n'est pas nécessaire",
 Adv_cache_sett		: "Paramètres avancés du cache",
 En_cach_disc		: "Activer le cache disque en écriture",
 Wr_out_ever_2_min	: "Écriture des blocs intacts toutes les deux minutes",
 Wr_immed			: "Écriture immédiate des pièces terminées",
 En_cah_disc_read	: "Activer le cache disque en lecture",
 Turn_off_w_read	: "Désactiver le cache en lecture si le taux d'émission est faible",
 Rem_old_from_cahe	: "Supprimer les anciens blocs du cache",
 Increase_autom_cach: "Augmenter automatiquement la taille du cache si celui-ci devient insuffisant",
 Advanced			: "Avancées",
 Advanced_label		: "Options avancées [Attention : à modifier avec précaution !]",
 Cancel				: "Annuler",
 uTorrent_settings	: "Options de rTorrent",
 
// Fenêtre principale
 Doesnt_support		: "ruTorrent ne supporte pas votre navigateur.",
 Name				: "Nom",
 Status				: "Statut",
 Size				: "Taille",
 Done				: "Reçu",
 Downloaded			: "Téléchargé",
 Uploaded			: "Envoyé",
 Ratio				: "Ratio",
 DL					: "Réception",
 UL					: "Émission",
 ETA				: "Temps estimé",
 Label				: "Étiquette",
 Peers				: "Clients",
 Seeds				: "Sources",
 Avail				: "Disponibilité",
 Remaining			: "Restant",
 Priority			: "Priorité",
 Download			: "Télécharger",
 Upload				: "Envoyer",
 Not_torrent_file	: "Le fichier doit être un torrent",
 Pausing			: "Pause",
 Seeding			: "Envoi",
 Downloading		: "Téléchargement",
 Checking			: "Vérification",
 Error				: "Erreur",
 Queued				: "Mis dans la file",
 Finished			: "Terminé",
 Stopped			: "Arrêté",
 Request_timed_out	: "La requête vers rTorrent a échoué.",
 
 Force_Start		: "Forcer le démarrage",
 Start				: "Démarrer",
 Pause				: "Pause",
 Stop				: "Arrêter",
 Force_recheck		: "Forcer la revérification",
 New_label			: "Nouvelle étiquette...",
 Remove_label		: "Supprimer l'étiquette",
 Labels				: "Étiquettes",
 Remove				: "Effacer",
 Delete_data		: "Supprimer les données",
 Remove_and			: "Effacer et ",
 Details			: "Détails...",
 Properties			: "Propriétés...",
 of					: "de", 		//this two creates line 
 connected			: "connecté(s)",	//  XX of YY connected
 High_priority		: "Haute",
 Normal_priority	: "Moyenne",
 Low_priority		: "Basse",
 Dont_download		: "Ne pas télécharger",
 Shure_restore_UI	: "Êtes-vous sûr de vouloir restaurer l'interface utilisateur?",
 Reloading			: "Rechargement...",
 Filename			: "Nom",
 Date_				: "Date",
 Files				: "Fichiers",
 Logger				: "Journal",
 
 s					: "s",    // part of "KB/s"
 bytes				: "octets",
 KB					: "Ko",
 MB					: "Mo",
 GB					: "Go",
 TB					: "To",
 PB					: "Po",
 
 // main WND s
 Loading			: "Chargement...",
 Torrent_file		: "Fichier torrent",
 Torrent_URL		: "URL du torrent",
 Cookies			: "Cookies",
 RSS_Downloader		: "Gestionnaire RSS",
 Torrent_properties	: "Propriétés du torrent",
 Trackers			: "Trackers",
 Max_down_rate		: "Taux maximum de réception",
 Max_upl_rate		: "Taux maximum d'émission",
 Bandwidth_sett		: "Paramètres de la bande passante",
 Number_ul_slots	: "Nombre de slots d'envoi",
 Override_default	: "Rétablir les réglages par défaut",
 Initial_seed		: "Envoi initial",
 Enable_DHT			: "Activer les DHT",
 Peer_ex			: "Échange P2P",
 About				: "À propos de",
 Enter_label_prom	: "Entrer la nouvelle étiquette pour les torrents sélectionnés",
 Remove_torrents	: "Effacer le(s) torrent(s)",
 Rem_torrents_prompt: "Voulez-vous vraiment effacer le(s) torrent(s) sélectionné(s) ?",
 All				: "Tous",
 Active				: "Actif",
 Inactive			: "Inactif",
 No_label			: "Sans étiquette",
 Transfer			: "Transfert",
 Time_el			: "Temps écoulé",
 restants			: "Restant",
 Share_ratio		: "Ratio",
 Down_speed			: "Vitesse de réception",
 Down_limit			: "Limite de réception",
 Ul_speed			: "Vitesse d'émission",
 Ul_limit			: "Limite d'émission",
 Wasted				: "Rejeté",
 Tracker			: "Tracker",
 Track_URL			: "URL du tracker",
 Track_status		: "Statut",
 Update_in			: "Actualisation",
 DHT_status			: "Statut des DHT",
 Save_as			: "Répertoire",
 Tot_size			: "Taille",
 Created_on			: "Date",
 Comment			: "Infos",
 
 
 //Boutons
 add_button			: "Ajouter",
 add_url			: "Ajouter",
 ok				: "   OK   ",
 Cancel				: " Annuler ",
 no				: "   Non   ",
 
 mnu_add			: "Ajouter un torrent",
 mnu_remove			: "Supprimer",
 mnu_start			: "Démarrer",
 mnu_pause			: "Suspendre",
 mnu_stop			: "Arrêter",
 mnu_rss			: "Gestionnaire RSS",
 mnu_settings			: "Préférences",
 mnu_search			: "Rechercher",
 mnu_lang			: "Langue",
 
 //Autres variables ajoutées par spide
 torrent_add			: "Ajouter un torrent", /*Caption of torrent add box*/
 time_w				: "sm ", /*pour x semaines*/
 time_d				: "j ", /*pour x jours restants*/
 time_h				: "h ", /*pour x heures restantes*/
 time_m				: "m ", /*pour x minutes restantes*/
 time_s				: "s ", /*pour x secondes restants*/
 
 //Novik's addition
 Base_directory    		: "Répertoire",
 Number_Peers_min		: "Nombre minimum de clients",
 Number_Peers_max		: "Nombre maximum de clients",
 Tracker_Numwant		: "Nombre souhaité de clients",
 Number_Peers_For_Seeds_min	: "Nombre minimum de sources",
 Number_Peers_For_Seeds_max	: "Nombre maximum de sources",
 Enable_port_open		: "Ouvrir le port d'écoute",
 dht_port			: "Utiliser le port UDP pour DHT",
 Ather_Limiting			: "Autres limitations",
 Number_dl_slots		: "Nombre de slots de téléchargement",
 Glob_max_memory		: "Utilisation maximale de la mémoire",
 Glob_max_files			: "Nombre maximum de fichiers ouverts",
 Glob_max_http			: "Nombre maximum de connexions HTTP ouvertes",
 Glob_max_sockets		: "Nombre maximum de sockets ouverts",
 Ather_sett			: "Autre",
 Directory_For_Dl		: "Répertoire par défaut pour les téléchargements",
 Check_hash			: "Vérifier le Hash après le téléchargement",
 Hash				: "Hash",
 IsOpen				: "Ouvert",
 DisableTracker			: "Désactivé",
 EnableTracker			: "Activé",
 ClientVersion			: "Client",
 Flags				: "Flags",
 ReqTimeout			: "Échec de la requête",
 GetTrackerMessage		: "Message reçu du tracker",
 Help				: "Aide",
 PHPDoesnt_enabled		: "Votre serveur web ne supporte pas PHP. Corriger ça et réessayer.",
 Speed				: "Vitesse",
 Dont_add_tname			: "Ne pas ajouter le nom du torrent au répertoire", 
 Free_Disk_Space		: "Espace disponible",
 badXMLRPCVersion		: "rTorrent est compilé avec une version incorrecte de la librairie xmlrpc-c, sans le support i8. La version doit être >= 1.11. Certaines fonctionnalités ne seront pas disponibles.",
 badLinkTorTorrent		: "Lien incorrect avec rTorrent. Vérifier qu'il est bien en cours d'exécution. Vérifier la configuration de $scgi_port et de $scgi_host dans config.php et scgi_port dans le fichier de configuration de rTorrent.",
 badUploadsPath			: "Le serveur Web ne peut pas accéder au dossier torrents en Lecture/Écriture/Execution. Vous ne pouvez pas ajouter de torrent via ruTorrent.",
 badSettingsPath		: "Le serveur Web ne peut pas accéder au dossier de configuration en Lecture/Écriture/Execution. ruTorrent ne peut pas enregistrer votre configuration.",
 mnu_help			: "À propos",
 badUploadsPath2		: "rTorrent ne peut pas accéder au dossier torrents en Lecture/Écriture. Vous ne pouvez pas ajouter de torrents via ruTorrent.",
 View				: "Voir",
 AsList				: "En liste",
 AsTree				: "En arbre",
 Group				: "Groupe",
 SuperSeed			: "Super-seed",
 badTestPath			: "rTorrent ne peut pas accéder au fichier ./test.sh en Lecture/Écriture. ruTorrent ne fonctionnera pas.",
 badSettingsPath2		: "rTorrent ne peut pas accéder au dossier de configuration en Lecture/Écriture. ruTorrent ne fonctionnera pas.",
 scrapeDownloaded		: "Téléchargé",
 Total				: "Total",
 PCRENotFound			: "Le module PCRE de PHP n'est pas installé. ruTorrent ne fonctionnera pas.",
 addTorrentSuccess		: "Torrent ajouté à rTorrent avec succès.",
 addTorrentFailed		: "Erreur: le torrent n'a pas pu être ajouté à rTorrent.",
 pnlState			: "Etat",
 newLabel			: "Nouvelle étiquette",
 enterLabel			: "Ajouter une étiquette",
 UIEffects			: "Activer les effets de l'UI",
 Plugins			: "Plugins",
 plgName			: "Nom",
 plgStatus			: "État",
 plgLoaded			: "Chargé",
 plgDisabled			: "Desactivé",
 plgVersion			: "Version",
 plgAuthor			: "Auteur",
 plgDescr			: "Description",
 mnu_go				: "Aller",
 pluginCantStart		: "Le plug-in ne peut pas démarrer pour une raison inconnue.",
 doFastResume			: "Démarrage rapide",
 innerSearch			: "Torrents locaux",
 removeTeg			: "Retirer tag",
 errMustBeInSomeHost		: "ruTorrent et rTorrent doivent être installés sur le même serveur. Le plug-in ne fonctionnera pas.",
 warnMustBeInSomeHost		: "ruTorrent et rTorrent doivent être installés sur le même serveur. Certaines fonctionnalités ne seront pas disponibles.",
 plgShutdown			: "Désactiver",
 limit				: "Limite",
 speedList			: "Menu de la liste des vitesses (séparé par des virgules)",
 ClearButton			: "Vider",
 dontShowTimeouts		: "Ignorer les messages d'échec",
 fullTableRender		: "Rendu complet de la liste des torrents",
 showScrollTables		: "Afficher la liste des torrents pendant le défilement",
 idNotFound			: "rTorrent ne peut pas accéder au programme 'id'. Certaines fonctionnalités ne seront pas disponibles.",
 gzipNotFound			: "Le serveur web n'a pas accès au programme 'gzip'. ruTorrent ne fonctionnera pas.",
 cantObtainUser         	: "ruTorrent ne détecte pas l'uid ou l'utilisateur de rtorrent. Certaines fonctionnalités ne seront pas disponibles.",
 retryOnErrorTitle		: "Si rtorrent n'est pas accessible, réessayer après",
 retryOnErrorList		: { 0: "Ne pas réessayer", 30: "30 sec", 60: "1 min", 120: "2 min", 300: "5 min", 900: "15 min" },
 statNotFound			: "rTorrent ne peut pas accéder au programme 'stat'. Certaines fonctionnalités ne seront pas disponibles.",
 statNotFoundW			: "Le serveur web n'a pas accès au programme 'stat'. Certaines fonctionnalités ne seront pas disponibles.",
 badrTorrentVersion		: "This version of rTorrent doesn't support this plugin. Plugin will not work. rTorrent version must be >=",
 badPHPVersion                  : "This version of PHP doesn't support this plugin. Plugin will not work. PHP version must be >=",
 rTorrentExternalNotFoundError	: "Plugin will not work. rTorrent's user can't access external program",
 rTorrentExternalNotFoundWarning: "Some functionality will be unavailable. rTorrent's user can't access external program",
 webExternalNotFoundError	: "Plugin will not work. Web-server user can't access external program",
 webExternalNotFoundWarning	: "Some functionality will be unavailable. Web-server user can't access external program",
 rTorrentBadScriptPath		: "Plugin will not work. rTorrent's user can't access file for read/execute",
 rTorrentBadPHPScriptPath	: "Plugin will not work. rTorrent's user can't access file for read"
};