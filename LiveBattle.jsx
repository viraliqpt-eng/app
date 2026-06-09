import React, { useState } from "react";
import "./LiveBattle.css";

export default function LiveBattle() {
  const [leftScore] = useState(25680);
  const [rightScore] = useState(18430);

  const total = leftScore + rightScore;
  const leftPercent = (leftScore / total) * 100;
  const rightPercent = (rightScore / total) * 100;

  return (
    <div className="live-page">

      <aside className="sidebar">
        <h1>💩 SHITAGRAM™</h1>

        <ul>
          <li>🏠 Feed</li>
          <li>🎬 ShitClips™</li>
          <li className="active">⚔️ Batalhas Live</li>
          <li>🏆 Ranking</li>
          <li>👤 Perfil</li>
        </ul>
      </aside>

      <main className="battle-main">

        <div className="score-panel">

          <div className="score-left">
            {leftScore.toLocaleString()}
          </div>

          <div className="score-center">
            <div className="battle-bar">

              <div
                className="left-bar"
                style={{ width: `${leftPercent}%` }}
              />

              <div
                className="right-bar"
                style={{ width: `${rightPercent}%` }}
              />

            </div>
          </div>

          <div className="score-right">
            {rightScore.toLocaleString()}
          </div>

        </div>

        <div className="arena">

          <div className="player left-player">

            <div className="live-tag">
              🔴 LIVE
            </div>

            <h2>Rei do Cocó</h2>

          </div>

          <div className="timer">
            02:47
          </div>

          <div className="player right-player">

            <h2>Princesa do Shit</h2>

          </div>

        </div>

        <div className="gift-panel">

          <button>💩</button>
          <button>☢️</button>
          <button>🧻</button>
          <button>🐒</button>
          <button>🚀</button>

        </div>

      </main>

      <aside className="right-panel">

        <div className="card">

          <h3>🏆 Top Doadores</h3>

          <p>Pedro — 45.600</p>
          <p>Fran — 22.100</p>
          <p>VIPShit — 12.000</p>

        </div>

        <div className="card">

          <h3>💬 Chat</h3>

          <p>Grande batalha!</p>
          <p>Vai Rei do Cocó!</p>

        </div>

      </aside>

    </div>
  );
}