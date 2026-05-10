import { Fragment, type ReactNode } from 'react';
import Tooltip from '@/components/ui/Tooltip';

const GLOSSARY: Record<string, string> = {
  'Channel Manager':
    'Sistema que sincroniza preços e disponibilidade entre o seu site e as principais OTAs.',
  'Premier Connectivity Partner':
    'Distinção atribuída pela Booking.com aos parceiros tecnológicos com a melhor integração e fiabilidade.',
  'OTAs':
    'Online Travel Agencies — plataformas que intermediam reservas em troca de comissão por cada estadia.',
  'Google Hotel Ads':
    'Anúncios pagos do Google em que o seu alojamento aparece nas pesquisas de hotéis e os utilizadores reservam diretamente no seu site.',
  'PCI Compliant':
    'Cumpre as normas de segurança da indústria de pagamentos para proteger os dados de cartão dos hóspedes.',
};

const TERMS = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
const TERM_REGEX = new RegExp(`(${TERMS.map(escapeRegex).join('|')})`, 'g');

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function withGlossary(text: string): ReactNode {
  const parts = text.split(TERM_REGEX);
  return (
    <Fragment>
      {parts.map((part, i) =>
        GLOSSARY[part] ? (
          <Tooltip key={i} term={part} definition={GLOSSARY[part]} />
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </Fragment>
  );
}
