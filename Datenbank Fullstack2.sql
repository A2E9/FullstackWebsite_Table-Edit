-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server Version:               8.0.30 - MySQL Community Server - GPL
-- Server Betriebssystem:        Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Exportiere Daten aus Tabelle person.auth_group: ~0 rows (ungefähr)

-- Exportiere Daten aus Tabelle person.auth_group_permissions: ~0 rows (ungefähr)

-- Exportiere Daten aus Tabelle person.auth_permission: ~28 rows (ungefähr)
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
	(1, 'Can add log entry', 1, 'add_logentry'),
	(2, 'Can change log entry', 1, 'change_logentry'),
	(3, 'Can delete log entry', 1, 'delete_logentry'),
	(4, 'Can view log entry', 1, 'view_logentry'),
	(5, 'Can add permission', 2, 'add_permission'),
	(6, 'Can change permission', 2, 'change_permission'),
	(7, 'Can delete permission', 2, 'delete_permission'),
	(8, 'Can view permission', 2, 'view_permission'),
	(9, 'Can add group', 3, 'add_group'),
	(10, 'Can change group', 3, 'change_group'),
	(11, 'Can delete group', 3, 'delete_group'),
	(12, 'Can view group', 3, 'view_group'),
	(13, 'Can add user', 4, 'add_user'),
	(14, 'Can change user', 4, 'change_user'),
	(15, 'Can delete user', 4, 'delete_user'),
	(16, 'Can view user', 4, 'view_user'),
	(17, 'Can add content type', 5, 'add_contenttype'),
	(18, 'Can change content type', 5, 'change_contenttype'),
	(19, 'Can delete content type', 5, 'delete_contenttype'),
	(20, 'Can view content type', 5, 'view_contenttype'),
	(21, 'Can add session', 6, 'add_session'),
	(22, 'Can change session', 6, 'change_session'),
	(23, 'Can delete session', 6, 'delete_session'),
	(24, 'Can view session', 6, 'view_session'),
	(25, 'Can add person', 7, 'add_person'),
	(26, 'Can change person', 7, 'change_person'),
	(27, 'Can delete person', 7, 'delete_person'),
	(28, 'Can view person', 7, 'view_person');

-- Exportiere Daten aus Tabelle person.auth_user: ~0 rows (ungefähr)
INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
	(1, 'pbkdf2_sha256$390000$tqzPZW5W3RwqUQnp0HOeOr$/oFuG339V6zORLUVEBE5iP0lVCI4xaNso81sxpU0CVg=', '2022-10-06 08:26:28.093438', 1, 'vre', '', '', 'vre@vre.vre', 1, 1, '2022-10-06 08:25:54.199347');

-- Exportiere Daten aus Tabelle person.auth_user_groups: ~0 rows (ungefähr)

-- Exportiere Daten aus Tabelle person.auth_user_user_permissions: ~0 rows (ungefähr)

-- Exportiere Daten aus Tabelle person.django_admin_log: ~0 rows (ungefähr)

-- Exportiere Daten aus Tabelle person.django_content_type: ~6 rows (ungefähr)
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
	(1, 'admin', 'logentry'),
	(3, 'auth', 'group'),
	(2, 'auth', 'permission'),
	(4, 'auth', 'user'),
	(5, 'contenttypes', 'contenttype'),
	(7, 'persons', 'person'),
	(6, 'sessions', 'session');

-- Exportiere Daten aus Tabelle person.django_migrations: ~18 rows (ungefähr)
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
	(1, 'contenttypes', '0001_initial', '2022-10-06 08:23:50.551723'),
	(2, 'auth', '0001_initial', '2022-10-06 08:23:51.137827'),
	(3, 'admin', '0001_initial', '2022-10-06 08:23:51.257206'),
	(4, 'admin', '0002_logentry_remove_auto_add', '2022-10-06 08:23:51.266202'),
	(5, 'admin', '0003_logentry_add_action_flag_choices', '2022-10-06 08:23:51.278775'),
	(6, 'contenttypes', '0002_remove_content_type_name', '2022-10-06 08:23:51.367108'),
	(7, 'auth', '0002_alter_permission_name_max_length', '2022-10-06 08:23:51.436378'),
	(8, 'auth', '0003_alter_user_email_max_length', '2022-10-06 08:23:51.481795'),
	(9, 'auth', '0004_alter_user_username_opts', '2022-10-06 08:23:51.502309'),
	(10, 'auth', '0005_alter_user_last_login_null', '2022-10-06 08:23:51.584707'),
	(11, 'auth', '0006_require_contenttypes_0002', '2022-10-06 08:23:51.589608'),
	(12, 'auth', '0007_alter_validators_add_error_messages', '2022-10-06 08:23:51.599044'),
	(13, 'auth', '0008_alter_user_username_max_length', '2022-10-06 08:23:51.659343'),
	(14, 'auth', '0009_alter_user_last_name_max_length', '2022-10-06 08:23:51.716032'),
	(15, 'auth', '0010_alter_group_name_max_length', '2022-10-06 08:23:51.735767'),
	(16, 'auth', '0011_update_proxy_permissions', '2022-10-06 08:23:51.752147'),
	(17, 'auth', '0012_alter_user_first_name_max_length', '2022-10-06 08:23:51.819581'),
	(18, 'sessions', '0001_initial', '2022-10-06 08:23:51.864033'),
	(19, 'persons', '0001_initial', '2022-10-06 09:31:52.060852');

-- Exportiere Daten aus Tabelle person.django_session: ~1 rows (ungefähr)
INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
	('8ojdxpqhgdkvwtl13lr856e33yh8ygdi', '.eJxVjEEOgjAQRe_StWnKTCnWpXvOQGY6g6CmTSisjHdXEha6_e-9_zIDbes0bFWXYRZzMY05_W5M6aF5B3KnfCs2lbwuM9tdsQetti-iz-vh_h1MVKdvDdp4B6wRz9A1NCYg30GMnh3JqISKokEQQichYlB2SJzAeaQ2tsm8P-DoN-8:1ogMD6:jm5lzk1bzxOZlt3yMzLn0BxPi83_GS9YyTNNHX09T10', '2022-10-20 08:26:28.097598');

-- Exportiere Daten aus Tabelle person.persons_person: ~25 rows (ungefähr)
INSERT INTO `persons_person` (`id`, `anrede`, `name`, `vorname`, `geschlecht`, `nationalitaet`, `strasse`, `plz`, `ort`, `geburtsdatum`, `abteilung`, `familienstand`, `gehalt`, `iban`, `steuerklasse`) VALUES
	(76, '', 'Becker', 'Polixenie', 'u', 'Israe', 'Guttzeit-Ring', '49356', 'Diepholz', '1995-04-03', '', 'verheiratet', 4933.00, 'DE65665146390011713472912977653387', 3),
	(77, 'Frau', 'Brun', 'Olympia', 'w', '', 'Böhmer Str.', '47249', 'Duisburg', '1984-05-26', 'Bildung', 'geschieden', 5680.00, 'DE31319569359263003136672842872263', 6),
	(78, 'Herr', 'Koch', 'Reiner', 'd', 'Australien', 'Langenwald', '87672', 'Roßhaupten', '1962-05-10', 'Versicherung', 'verheiratet', 5426.00, 'DE41253928646633076532821007494305', 5),
	(79, 'Frau', 'Brandt', 'Klarina', 'w', 'Bosnien', 'General-von-Nagel-Str.', '85354', 'Freising', '1941-08-13', '', 'ledig', 6766.00, 'DE34419118325808968387294341985948', 6),
	(80, '', 'Habicht', 'Helika', 'm', 'Marokko', 'Lisa-Tetzner-Weg', '58640', 'Iserlohn', '1934-12-24', 'Bau', 'verheiratet', 5286.00, 'DE28802208326070742013125355607633', 5),
	(81, '', 'Welter', 'Manela', 'm', 'Bosnien', 'Lilienweg', '92720', 'Schwarzenbach', '1965-10-30', '', 'ledig', 1728.00, 'DE51308185591549094308543990838489', 3),
	(82, 'Frau', 'Küchler', 'Linelle', 'm', 'Südkorea', 'Schieblerstr.', '29223', 'Celle', '1949-11-02', 'Dienstleistungen', 'ledig', 3855.00, 'DE69781746175448540179487138822916', 2),
	(83, 'Frau', 'Knef', 'Nelli', 'w', 'Liberia', 'Überhofer Str.', '66346', 'Püttlingen', '1950-10-26', '', 'verheiratet', 1865.00, 'DE10724141932999177452402959155227', 3),
	(84, 'Frau', 'Foerstner', 'Annelena', 'm', '', 'Grüner Winkel', '23968', 'Barnekow', '1943-02-11', 'Fitness', 'geschieden', 4182.00, 'DE32082648074777004498290223167228', 4),
	(85, 'Frau', 'Vogel', 'Gildena', 'd', 'Bangladesch', 'Im Hesselbruch', '45356', 'Essen', '1962-07-04', '', 'ledig', 4033.00, 'DE42394799920207932822722083339491', 4),
	(86, '', 'Größel', 'Role', 'd', 'Myanmar', 'Hohenkrähenstr.', '78234', 'Engen', '1933-04-02', '', 'geschieden', 6704.00, 'DE45074708510953794098214868638383', 6),
	(87, 'Frau', 'Höfler', 'Melanie', 'u', 'Färöer', 'Innere Einfahrt', '86720', 'Nördlingen', '1963-10-26', '', 'verheiratet', 3129.00, 'DE42184645888724238689628849613500', 4),
	(88, 'Herr', 'Gerhard', 'Jonas', 'm', 'Sierra', 'Neu Bartelsdorf', '18182', 'Bentwisch', '2001-01-20', 'Umwelt', 'verheiratet', 4265.00, 'DE43336978621246295016917190200916', 4),
	(90, 'Herr', 'Kramer', 'Wolfger', 'w', 'Norwegen', 'Petersilienstr.', '30559', 'Hannover', '2003-02-26', 'Ärzte', 'verheiratet', 1677.00, 'DE03310522414712341154717194257614', 4),
	(91, 'Herr', 'Feld', 'Kim', 'd', 'Bahamas', 'Holbeinstr.', '64291', 'Darmstadt', '1998-08-05', 'Forschung', 'ledig', 3753.00, 'DE57218903816612752246302356412333', 6),
	(92, 'Frau', 'Bernhard', 'Bertrade', 'u', 'Polen', 'J.-N.-Heinemann-Str.', '78183', 'Hüfingen', '1996-01-12', 'Elektroinstallationen', 'geschieden', 4897.00, 'DE17452040593547573308613218563355', 3),
	(93, 'Herr', 'rere', 'Karl', 'd', 'Burundi', 'Bienenstr.', '97922', 'Lauda-Königshofen', '2002-10-15', 'Software', 'ledig', 5579.00, 'DE39790460878640157741284894439423', 1),
	(94, 'Frau', 'Kunkle', 'Line', 'u', 'Südkorea', 'Am Heger Holz', '49078', 'Osnabrück', '1933-06-12', 'Logistik', 'verheiratet', 4338.00, 'DE17613703410345273255651386181383', 1),
	(95, 'Frau', 'Schmeling', 'Yella', 'w', 'Grönland', 'Am Friedrich-Ebert-Platz', '22222', 'Reinheim', '1988-09-22', 'Unternehmen', 'geschieden', 3776.00, 'DE79918485968308978261997771948449', 4),
	(96, 'Herr', 'Lehmann', 'Roan', 'd', 'Jordanien', 'Lindenstr.', '84367', 'Reut', '1996-01-31', '', 'ledig', 3213.00, 'DE45222122092459106899654611653928', 6),
	(98, '', 'Schmidt', 'Lars', 'm', 'Andorra', 'Am Pulverturm', '78187', 'Geisingen', '1981-03-14', 'Kino', 'geschieden', 1819.00, 'DE72004060430606807151681918806198', 6),
	(501, NULL, 'rere', 'vava', 'm', 'fefe', 'feef', '94899', 'efee', '2022-10-03', NULL, 'verheiratet', 3333.00, 'DE93859475874359847359745934759374', 3),
	(511, NULL, 'dfg', 'tgfhj', 'm', 'dfg', 'gdfg', '43534', 'rfdgdf', '2022-10-03', 'dfgd', 'verheiratet', 345.00, 'fr43534534534534534534534534534534', 2),
	(512, 'Herr', 'eeeeeeeeeeeeee', 'eeee', 'd', NULL, 'eeee', '33333', 'eeeee', '2022-10-03', NULL, 'verheiratet', 33333.00, 'ee33333333333333333333333333333333', 2),
	(513, 'Herr', 'k', 'z', 'u', 'zz', 'hgfh', '55555', 'k', '2023-03-07', 'zzz', 'verheiratet', 564564.00, 'gr55555555555555555555555555555555', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
