<?php

if( !chdir( dirname( __FILE__) ) )
	exit();

if( count( $argv ) > 4 )
	$_SERVER['REMOTE_USER'] = $argv[4];

require_once( "./util_rt.php" );
require_once( "./autotools.php" );

$base_path = $argv[1];
$base_name = $argv[2];
$is_multy = $argv[3];
$at = rAutoTools::load();
if( $at->enable_move )
{
	$path_to_finished = trim( $at->path_to_finished );
	if( $path_to_finished != '' )
	{
		$path_to_finished = rtAddTailSlash( $path_to_finished );
		$directory    = rTorrentSettings::get()->directory;
		if(!empty($directory))
		{
			$directory = rtAddTailSlash( $directory );
			$base_path = rtRemoveTailSlash( $base_path );
			$base_path = rtRemoveLastToken( $base_path, '/' );	// filename or dirname
			$base_path = rtAddTailSlash( $base_path );
			$rel_path = rtGetRelativePath( $directory, $base_path );

//			if( $rel_path != '' )
			{
				if( $rel_path == './' ) $rel_path = '';
				$dest_path = rtAddTailSlash( $path_to_finished.$rel_path );
				if( $is_multy )
					$sub_dir = rtAddTailSlash( $base_name );	// $base_file - is a directory
				else
					$sub_dir = '';					// $base_file - is really a file
				$dest_path.=$sub_dir;
				echo $dest_path;
				exit(0);
			}
		}
	}
}

echo $argv[1];

?>