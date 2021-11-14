import React from "react";

import {Container, Row} from "react-bootstrap";

import TrackCard from "./TrackCard";


function ArtistTopTracks(){

  const dummy_data={
    "data": [
      {
        "id": "67238735",
        "readable": true,
        "title": "Get Lucky (feat. Pharrell Williams & Nile Rodgers)",
        "title_short": "Get Lucky (feat. Pharrell Williams & Nile Rodgers)",
        "title_version": "",
        "link": "https://www.deezer.com/track/67238735",
        "duration": "369",
        "rank": "813849",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-8.dzcdn.net/stream/c-853d19a12a694ccc74b2501acd802500-6.mp3",
        "contributors": [
          {
            "id": 27,
            "name": "Daft Punk",
            "link": "https://www.deezer.com/artist/27",
            "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636823387&utm_medium=web",
            "picture": "https://api.deezer.com/artist/27/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist",
            "role": "Main"
          },
          {
            "id": 103,
            "name": "Pharrell Williams",
            "link": "https://www.deezer.com/artist/103",
            "share": "https://www.deezer.com/artist/103?utm_source=deezer&utm_content=artist-103&utm_term=0_1636823387&utm_medium=web",
            "picture": "https://api.deezer.com/artist/103/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/103/top?limit=50",
            "type": "artist",
            "role": "Featured"
          },
          {
            "id": 7207,
            "name": "Nile Rodgers",
            "link": "https://www.deezer.com/artist/7207",
            "share": "https://www.deezer.com/artist/7207?utm_source=deezer&utm_content=artist-7207&utm_term=0_1636823387&utm_medium=web",
            "picture": "https://api.deezer.com/artist/7207/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/7207/top?limit=50",
            "type": "artist",
            "role": "Featured"
          }
        ],
        "md5_image": "b298094528702627877720d0be4448b5",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "album": {
          "id": "6575789",
          "title": "Random Access Memories",
          "cover": "https://api.deezer.com/album/6575789/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/1000x1000-000000-80-0-0.jpg",
          "md5_image": "b298094528702627877720d0be4448b5",
          "tracklist": "https://api.deezer.com/album/6575789/tracks",
          "type": "album"
        },
        "type": "track"
      },
      {
        "id": "66609426",
        "readable": true,
        "title": "Get Lucky (feat. Pharrell Williams & Nile Rodgers) (Radio Edit)",
        "title_short": "Get Lucky (feat. Pharrell Williams & Nile Rodgers)",
        "title_version": "(Radio Edit)",
        "link": "https://www.deezer.com/track/66609426",
        "duration": "248",
        "rank": "942328",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-b.dzcdn.net/stream/c-bdab5f5d846a91f14a01b75731dbc22a-7.mp3",
        "contributors": [
          {
            "id": 27,
            "name": "Daft Punk",
            "link": "https://www.deezer.com/artist/27",
            "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636823387&utm_medium=web",
            "picture": "https://api.deezer.com/artist/27/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist",
            "role": "Main"
          },
          {
            "id": 103,
            "name": "Pharrell Williams",
            "link": "https://www.deezer.com/artist/103",
            "share": "https://www.deezer.com/artist/103?utm_source=deezer&utm_content=artist-103&utm_term=0_1636823387&utm_medium=web",
            "picture": "https://api.deezer.com/artist/103/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/103/top?limit=50",
            "type": "artist",
            "role": "Featured"
          },
          {
            "id": 7207,
            "name": "Nile Rodgers",
            "link": "https://www.deezer.com/artist/7207",
            "share": "https://www.deezer.com/artist/7207?utm_source=deezer&utm_content=artist-7207&utm_term=0_1636823387&utm_medium=web",
            "picture": "https://api.deezer.com/artist/7207/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/7207/top?limit=50",
            "type": "artist",
            "role": "Featured"
          }
        ],
        "md5_image": "bc49adb87758e0c8c4e508a9c5cce85d",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "album": {
          "id": "6516139",
          "title": "Get Lucky (feat. Pharrell Williams & Nile Rodgers) (Radio Edit)",
          "cover": "https://api.deezer.com/album/6516139/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/1000x1000-000000-80-0-0.jpg",
          "md5_image": "bc49adb87758e0c8c4e508a9c5cce85d",
          "tracklist": "https://api.deezer.com/album/6516139/tracks",
          "type": "album"
        },
        "type": "track"
      },
      {
        "id": "3135553",
        "readable": true,
        "title": "One More Time",
        "title_short": "One More Time",
        "title_version": "",
        "link": "https://www.deezer.com/track/3135553",
        "duration": "320",
        "rank": "913564",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-9.mp3",
        "contributors": [
          {
            "id": 27,
            "name": "Daft Punk",
            "link": "https://www.deezer.com/artist/27",
            "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636823387&utm_medium=web",
            "picture": "https://api.deezer.com/artist/27/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist",
            "role": "Main"
          }
        ],
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "album": {
          "id": "302127",
          "title": "Discovery",
          "cover": "https://api.deezer.com/album/302127/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
          "md5_image": "2e018122cb56986277102d2041a592c8",
          "tracklist": "https://api.deezer.com/album/302127/tracks",
          "type": "album"
        },
        "type": "track"
      },
      {
        "id": "67238732",
        "readable": true,
        "title": "Instant Crush (feat. Julian Casablancas)",
        "title_short": "Instant Crush (feat. Julian Casablancas)",
        "title_version": "",
        "link": "https://www.deezer.com/track/67238732",
        "duration": "337",
        "rank": "900908",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-7.dzcdn.net/stream/c-7d29f91f6875494c4104a0c436581293-9.mp3",
        "contributors": [
          {
            "id": 27,
            "name": "Daft Punk",
            "link": "https://www.deezer.com/artist/27",
            "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636823387&utm_medium=web",
            "picture": "https://api.deezer.com/artist/27/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist",
            "role": "Main"
          },
          {
            "id": 295821,
            "name": "Julian Casablancas",
            "link": "https://www.deezer.com/artist/295821",
            "share": "https://www.deezer.com/artist/295821?utm_source=deezer&utm_content=artist-295821&utm_term=0_1636823387&utm_medium=web",
            "picture": "https://api.deezer.com/artist/295821/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/a430c3ac3f546ced1e4ecff25fe4b921/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/a430c3ac3f546ced1e4ecff25fe4b921/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/a430c3ac3f546ced1e4ecff25fe4b921/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/a430c3ac3f546ced1e4ecff25fe4b921/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/295821/top?limit=50",
            "type": "artist",
            "role": "Featured"
          }
        ],
        "md5_image": "b298094528702627877720d0be4448b5",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "album": {
          "id": "6575789",
          "title": "Random Access Memories",
          "cover": "https://api.deezer.com/album/6575789/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/1000x1000-000000-80-0-0.jpg",
          "md5_image": "b298094528702627877720d0be4448b5",
          "tracklist": "https://api.deezer.com/album/6575789/tracks",
          "type": "album"
        },
        "type": "track"
      },
      {
        "id": "3135554",
        "readable": true,
        "title": "Aerodynamic",
        "title_short": "Aerodynamic",
        "title_version": "",
        "link": "https://www.deezer.com/track/3135554",
        "duration": "212",
        "rank": "697130",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 6,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b2e0166bba75a78251d6dca9c9c3b41a-7.mp3",
        "contributors": [
          {
            "id": 27,
            "name": "Daft Punk",
            "link": "https://www.deezer.com/artist/27",
            "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636823387&utm_medium=web",
            "picture": "https://api.deezer.com/artist/27/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist",
            "role": "Main"
          }
        ],
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "album": {
          "id": "302127",
          "title": "Discovery",
          "cover": "https://api.deezer.com/album/302127/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
          "md5_image": "2e018122cb56986277102d2041a592c8",
          "tracklist": "https://api.deezer.com/album/302127/tracks",
          "type": "album"
        },
        "type": "track"
      }
    ],
    "total": 95,
    "next": "https://api.deezer.com/artist/27/top?index=5"
  }
  
  
  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="d-inline mb-3">Top Tracks</h3>
        </Row>
        <Row className="mt-4">
            {
                dummy_data.data.map((track) => (
                  <div className="d-flex flex-column justify-content-center">
                    <TrackCard track={track} key={track.id}/>
                  </div>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default ArtistTopTracks;