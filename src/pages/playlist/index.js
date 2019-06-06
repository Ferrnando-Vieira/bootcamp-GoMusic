import React from "react";

import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://http2.mlstatic.com/cd-metallica-helping-hands-live-acoustic-at-the-masonic-D_NQ_NP_923299-MLB29686740117_032019-F.jpg"
        alt="playlist"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>O Melhor do Metal \m/</h1>
        <p>13 Músicas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Turn the Page</td>
          <td>Metallica</td>
          <td>Helping Hands</td>
          <td>2:48</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Turn the Page</td>
          <td>Metallica</td>
          <td>Helping Hands</td>
          <td>2:48</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Turn the Page</td>
          <td>Metallica</td>
          <td>Helping Hands</td>
          <td>2:48</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Turn the Page</td>
          <td>Metallica</td>
          <td>Helping Hands</td>
          <td>2:48</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Turn the Page</td>
          <td>Metallica</td>
          <td>Helping Hands</td>
          <td>2:48</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Turn the Page</td>
          <td>Metallica</td>
          <td>Helping Hands</td>
          <td>2:48</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
