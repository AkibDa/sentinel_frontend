import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const IntegrityStatus = () => {
  const { connected } = useWallet();

  return (
    <div className="flex items-center gap-3">
      {connected && (
        <span className="flex items-center gap-1.5 text-emerald-400 text-[9px] uppercase tracking-widest px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Blockchain Optimized
        </span>
      )}
      <WalletMultiButton
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '9999px',
          color: 'rgba(255,255,255,0.6)',
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '8px 20px',
          height: 'auto',
          lineHeight: 1,
          fontFamily: 'inherit',
          transition: 'all 0.3s ease'
        }}
      />
    </div>
  );
};
