import React from "react";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img
          src="https://avatars.githubusercontent.com/u/129964591?v=4"
          alt="Profile"
        />
      </div>

      <div className="profile-info">
        <h2 className="profile-name">Gagan TP</h2>
        <p className="profile-profession">Engineering Student</p>
      </div>

      <style>{`
        :root{
          --card-w: 440px;
          --card-h: 160px;
          --accent-1: #6e8efb;
          --accent-2: #a777ff;
          --accent-3: #00d4ff;
          --glass: rgba(255,255,255,0.55);
        }

        .profile-card {
          width: var(--card-w);
          height: var(--card-h);
          margin: 48px auto;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 18px 22px;
          border-radius: 14px;
          position: relative;
          overflow: hidden;
          cursor: default;

          background: linear-gradient(135deg, rgba(110,142,251,0.12) 0%, rgba(167,119,255,0.10) 40%, rgba(0,212,255,0.06) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 6px 18px rgba(25, 30, 40, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.03);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .profile-card::after{
          content: "";
          position: absolute;
          top: -30%;
          left: -40%;
          width: 220%;
          height: 160%;
          background: linear-gradient(120deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02) 30%, rgba(255,255,255,0.0) 60%);
          transform: rotate(-18deg);
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .profile-card::before {
          content: "";
          position: absolute;
          top: 12px;
          left: 12px;
          bottom: 12px;
          width: 8px;
          border-radius: 6px;
          background: linear-gradient(180deg, var(--accent-1), var(--accent-2), var(--accent-3));
          box-shadow: 0 6px 18px rgba(110,142,251,0.12);
          z-index: 0;
        }

        .profile-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 16px 40px rgba(6, 36, 94, 0.18),
            inset 0 1px 0 rgba(218, 6, 6, 0.04);
        }

        .profile-image{
          flex: 0 0 120px;
          height: 120px;
          border-radius: 12px;
          overflow: hidden;
          margin-left: 28px; /* push right of the accent strip */
          box-shadow: 0 8px 18px rgba(9, 48, 131, 0.08);
          border: 2px solid rgba(255,255,255,0.12);
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          z-index: 2;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .profile-card:hover .profile-image{
          transform: scale(1.04) translateY(-2px);
          box-shadow: 0 20px 36px rgba(123, 164, 252, 0.14);
        }

        .profile-image img{
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-info{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start; /* left aligned - typical visiting card */
          gap: 6px;
          z-index: 2;
          margin-left: 6px;
        }

        .profile-name{
          font-size: 1.25rem;
          margin: 0;
          color: #eef0f1ff;
          font-weight: 800;
          letter-spacing: -0.2px;
        }

        .profile-profession{
          margin: 0;
          font-size: 0.98rem;
          color: #ffffffff;
          font-weight: 600;
          display: inline-block;
          padding: 6px 10px;
          border-radius: 8px;
          background: linear-gradient(90deg, rgba(233, 237, 249, 0.1), rgba(169, 203, 209, 0.04));
          border: 1px solid rgba(110,142,251,0.06);
          box-shadow: 0 2px 8px rgba(110,142,251,0.03);
        }

        .profile-sub {
          font-size: 0.85rem;
          color: #5b6c86;
          margin-top: 6px;
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;
