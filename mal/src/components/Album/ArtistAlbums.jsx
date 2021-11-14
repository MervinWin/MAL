import React from "react";
import Slider from "react-slick";

import {Container, Row, Col} from "react-bootstrap";

import AlbumCard from "./AlbumCard";

function ArtistAlbums(){
    const dummy_data={
        "data": [
          {
            "id": "8244118",
            "title": "Human After All (Remixes)",
            "link": "https://www.deezer.com/album/8244118",
            "cover": "https://api.deezer.com/album/8244118/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f6a4dbf47cb8828c281ed4e63364f99e",
            "genre_id": 113,
            "fans": 29619,
            "release_date": "2005-03-20",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/8244118/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "6575789",
            "title": "Random Access Memories",
            "link": "https://www.deezer.com/album/6575789",
            "cover": "https://api.deezer.com/album/6575789/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b298094528702627877720d0be4448b5",
            "genre_id": 132,
            "fans": 794584,
            "release_date": "2013-05-17",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/6575789/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "1471670",
            "title": "TRON: Legacy Reconfigured",
            "link": "https://www.deezer.com/album/1471670",
            "cover": "https://api.deezer.com/album/1471670/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/1000x1000-000000-80-0-0.jpg",
            "md5_image": "2f34e0fe8086785fab7d6dfd8d48ba5a",
            "genre_id": 106,
            "fans": 5549,
            "release_date": "2011-04-01",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/1471670/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "192529232",
            "title": "TRON: Legacy - The Complete Edition (Original Motion Picture Soundtrack)",
            "link": "https://www.deezer.com/album/192529232",
            "cover": "https://api.deezer.com/album/192529232/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/1000x1000-000000-80-0-0.jpg",
            "md5_image": "313e8a988614445ab1ad508da2805187",
            "genre_id": 173,
            "fans": 13511,
            "release_date": "2020-12-18",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/192529232/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "304193",
            "title": "Alive 2007",
            "link": "https://www.deezer.com/album/304193",
            "cover": "https://api.deezer.com/album/304193/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/1000x1000-000000-80-0-0.jpg",
            "md5_image": "ad3dda2e1b770ad143d5dbfeb667fa39",
            "genre_id": 113,
            "fans": 130621,
            "release_date": "2007-11-16",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/304193/tracks",
            "explicit_lyrics": true,
            "type": "album"
          },
          {
            "id": "1343199",
            "title": "Musique, Vol. 1",
            "link": "https://www.deezer.com/album/1343199",
            "cover": "https://api.deezer.com/album/1343199/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/1000x1000-000000-80-0-0.jpg",
            "md5_image": "39e2281a0e9f564e73b4f49dfa06f4ab",
            "genre_id": 106,
            "fans": 59049,
            "release_date": "2006-03-31",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/1343199/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "303459",
            "title": "Human After All",
            "link": "https://www.deezer.com/album/303459",
            "cover": "https://api.deezer.com/album/303459/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/1000x1000-000000-80-0-0.jpg",
            "md5_image": "48701ef0699add067f257045a72d06af",
            "genre_id": 113,
            "fans": 87773,
            "release_date": "2005-03-15",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/303459/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "299205",
            "title": "Daft Club",
            "link": "https://www.deezer.com/album/299205",
            "cover": "https://api.deezer.com/album/299205/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/1000x1000-000000-80-0-0.jpg",
            "md5_image": "0416976ab8f3f32e0b447dd1b9b1e0cf",
            "genre_id": 113,
            "fans": 42394,
            "release_date": "2003-12-01",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/299205/tracks",
            "explicit_lyrics": true,
            "type": "album"
          },
          {
            "id": "299137",
            "title": "Alive 1997",
            "link": "https://www.deezer.com/album/299137",
            "cover": "https://api.deezer.com/album/299137/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/dad3f5830a650c17f7125dca7c50f1d6/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/dad3f5830a650c17f7125dca7c50f1d6/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/dad3f5830a650c17f7125dca7c50f1d6/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/dad3f5830a650c17f7125dca7c50f1d6/1000x1000-000000-80-0-0.jpg",
            "md5_image": "dad3f5830a650c17f7125dca7c50f1d6",
            "genre_id": 113,
            "fans": 6111,
            "release_date": "2005-01-21",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/299137/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "302127",
            "title": "Discovery",
            "link": "https://www.deezer.com/album/302127",
            "cover": "https://api.deezer.com/album/302127/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "genre_id": 113,
            "fans": 247274,
            "release_date": "2001-03-07",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/302127/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "301775",
            "title": "Homework",
            "link": "https://www.deezer.com/album/301775",
            "cover": "https://api.deezer.com/album/301775/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b870579c8650cd59b1cce656dde2ef17",
            "genre_id": 113,
            "fans": 134200,
            "release_date": "1997-01-16",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/301775/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "6703346",
            "title": "Get Lucky (feat. Pharrell Williams & Nile Rodgers)",
            "link": "https://www.deezer.com/album/6703346",
            "cover": "https://api.deezer.com/album/6703346/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b1b2ac88710b0c721a680b9f9df947d7",
            "genre_id": 132,
            "fans": 9223,
            "release_date": "2013-07-03",
            "record_type": "ep",
            "tracklist": "https://api.deezer.com/album/6703346/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "6703310",
            "title": "Get Lucky",
            "link": "https://www.deezer.com/album/6703310",
            "cover": "https://api.deezer.com/album/6703310/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b1b2ac88710b0c721a680b9f9df947d7",
            "genre_id": 132,
            "fans": 27441,
            "release_date": "2013-06-26",
            "record_type": "ep",
            "tracklist": "https://api.deezer.com/album/6703310/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "302378",
            "title": "Harder, Better, Faster, Stronger",
            "link": "https://www.deezer.com/album/302378",
            "cover": "https://api.deezer.com/album/302378/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/0ac2d2c8e627fcb6b708efa4237f57c8/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/0ac2d2c8e627fcb6b708efa4237f57c8/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/0ac2d2c8e627fcb6b708efa4237f57c8/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/0ac2d2c8e627fcb6b708efa4237f57c8/1000x1000-000000-80-0-0.jpg",
            "md5_image": "0ac2d2c8e627fcb6b708efa4237f57c8",
            "genre_id": 113,
            "fans": 19742,
            "release_date": "2001-10-19",
            "record_type": "ep",
            "tracklist": "https://api.deezer.com/album/302378/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "325477",
            "title": "Revolution 909",
            "link": "https://www.deezer.com/album/325477",
            "cover": "https://api.deezer.com/album/325477/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/3d0891473275db1310a4feea8e6bb405/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/3d0891473275db1310a4feea8e6bb405/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/3d0891473275db1310a4feea8e6bb405/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/3d0891473275db1310a4feea8e6bb405/1000x1000-000000-80-0-0.jpg",
            "md5_image": "3d0891473275db1310a4feea8e6bb405",
            "genre_id": 113,
            "fans": 5852,
            "release_date": "2005-01-21",
            "record_type": "ep",
            "tracklist": "https://api.deezer.com/album/325477/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "302364",
            "title": "Around the World",
            "link": "https://www.deezer.com/album/302364",
            "cover": "https://api.deezer.com/album/302364/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/1000x1000-000000-80-0-0.jpg",
            "md5_image": "8bf010db50a851518e3edf3407145387",
            "genre_id": 113,
            "fans": 20003,
            "release_date": "1997-04-11",
            "record_type": "ep",
            "tracklist": "https://api.deezer.com/album/302364/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "325476",
            "title": "Burnin'",
            "link": "https://www.deezer.com/album/325476",
            "cover": "https://api.deezer.com/album/325476/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/cea7bffeacb0f7093cff63469e7e5944/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/cea7bffeacb0f7093cff63469e7e5944/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/cea7bffeacb0f7093cff63469e7e5944/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/cea7bffeacb0f7093cff63469e7e5944/1000x1000-000000-80-0-0.jpg",
            "md5_image": "cea7bffeacb0f7093cff63469e7e5944",
            "genre_id": 113,
            "fans": 5471,
            "release_date": "2006-04-21",
            "record_type": "ep",
            "tracklist": "https://api.deezer.com/album/325476/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "7561419",
            "title": "Derezzed (From “TRON: Legacy” Avicii \"So Amazing Mix\" Feat. Negin)",
            "link": "https://www.deezer.com/album/7561419",
            "cover": "https://api.deezer.com/album/7561419/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/f3e62688b1f759f9c986a073df77ee63/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/f3e62688b1f759f9c986a073df77ee63/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/f3e62688b1f759f9c986a073df77ee63/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/f3e62688b1f759f9c986a073df77ee63/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f3e62688b1f759f9c986a073df77ee63",
            "genre_id": 113,
            "fans": 5918,
            "release_date": "2014-04-01",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/7561419/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "6516139",
            "title": "Get Lucky (feat. Pharrell Williams & Nile Rodgers) (Radio Edit)",
            "link": "https://www.deezer.com/album/6516139",
            "cover": "https://api.deezer.com/album/6516139/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/1000x1000-000000-80-0-0.jpg",
            "md5_image": "bc49adb87758e0c8c4e508a9c5cce85d",
            "genre_id": 106,
            "fans": 154265,
            "release_date": "2013-04-19",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/6516139/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "3492561",
            "title": "Human After All (Medley)",
            "link": "https://www.deezer.com/album/3492561",
            "cover": "https://api.deezer.com/album/3492561/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/9882207e85296dc1ef9933bc73fb1b1d/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/9882207e85296dc1ef9933bc73fb1b1d/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/9882207e85296dc1ef9933bc73fb1b1d/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/9882207e85296dc1ef9933bc73fb1b1d/1000x1000-000000-80-0-0.jpg",
            "md5_image": "9882207e85296dc1ef9933bc73fb1b1d",
            "genre_id": 113,
            "fans": 3243,
            "release_date": "2012-06-22",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/3492561/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "7294967",
            "title": "Harder, Better, Faster, Stronger",
            "link": "https://www.deezer.com/album/7294967",
            "cover": "https://api.deezer.com/album/7294967/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/1000x1000-000000-80-0-0.jpg",
            "md5_image": "43a0af617608677263fba3fb4709b706",
            "genre_id": 113,
            "fans": 3562,
            "release_date": "2010-04-05",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/7294967/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "7294838",
            "title": "Harder, Better, Faster, Stronger (Live)",
            "link": "https://www.deezer.com/album/7294838",
            "cover": "https://api.deezer.com/album/7294838/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/1000x1000-000000-80-0-0.jpg",
            "md5_image": "43a0af617608677263fba3fb4709b706",
            "genre_id": 113,
            "fans": 3266,
            "release_date": "2010-03-15",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/7294838/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "325490",
            "title": "Harder, Better, Faster, Stronger (Alive Radio Edit 2007)",
            "link": "https://www.deezer.com/album/325490",
            "cover": "https://api.deezer.com/album/325490/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/1000x1000-000000-80-0-0.jpg",
            "md5_image": "43a0af617608677263fba3fb4709b706",
            "genre_id": 113,
            "fans": 5150,
            "release_date": "2007-10-09",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/325490/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "325424",
            "title": "Human After All",
            "link": "https://www.deezer.com/album/325424",
            "cover": "https://api.deezer.com/album/325424/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/eedf82df23d351df0bbba0d3d27ce48e/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/eedf82df23d351df0bbba0d3d27ce48e/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/eedf82df23d351df0bbba0d3d27ce48e/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/eedf82df23d351df0bbba0d3d27ce48e/1000x1000-000000-80-0-0.jpg",
            "md5_image": "eedf82df23d351df0bbba0d3d27ce48e",
            "genre_id": 113,
            "fans": 1003,
            "release_date": "2005-10-28",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/325424/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "303165",
            "title": "Technologic",
            "link": "https://www.deezer.com/album/303165",
            "cover": "https://api.deezer.com/album/303165/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/c139f190f4d55df305e96add35075710/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/c139f190f4d55df305e96add35075710/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/c139f190f4d55df305e96add35075710/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/c139f190f4d55df305e96add35075710/1000x1000-000000-80-0-0.jpg",
            "md5_image": "c139f190f4d55df305e96add35075710",
            "genre_id": 113,
            "fans": 1673,
            "release_date": "2005-06-10",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/303165/tracks",
            "explicit_lyrics": false,
            "type": "album"
          }
        ],
        "total": 32,
        "next": "https://api.deezer.com/artist/27/albums?index=25"
      }

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="mb-3">Albums</h3>
        </Row>
        <Slider {...settings} className="mx-2">
            {
                dummy_data.data.map((album) => (
                  <Col sm={3} className="d-flex justify-content-center">
                    <AlbumCard album={album} key={album.id}/>
                  </Col>
                ))
            }
        </Slider>
      </Container>
    </div>
  )
}

export default ArtistAlbums;