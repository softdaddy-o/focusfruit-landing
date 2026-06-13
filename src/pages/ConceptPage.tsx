import { useEffect, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

const asset = (name: string) => `/concept/${name}`;
const slice = (name: string) => `/concept/slices/${name}`;
const kakaoExpression = (name: string) => `/concept/kakao-expression-refs/${name}`;

const reviewFlow = [
  '체형 실루엣',
  '캐릭터 스타일',
  '카톡 표현 문법',
  '우리 캐릭터 적용',
  '상태별 포즈',
  '표정 반응',
  '모션 구조',
  '파츠 구조',
];

const referenceCards = [
  {
    id: 'A',
    title: '망가진 꼬질함',
    label: 'Grubby Face',
    image: kakaoExpression('crops/01-broken-bear-grubby.png'),
    note: '깨끗하게 예쁜 대신 피곤함과 하찮음을 남기는 방식. FocusFruit의 지친 휴식 표정에 맞습니다.',
  },
  {
    id: 'B',
    title: '불안한 떨림',
    label: 'Nervous Small',
    image: kakaoExpression('crops/02-shaking-chihuahua.png'),
    note: '작은 몸, 커진 눈, 떨림선만으로 즉시 반응을 읽게 만드는 문법입니다.',
  },
  {
    id: 'C',
    title: '멍한 몸짓',
    label: 'Deadpan Body',
    image: kakaoExpression('crops/03-hyrax-deadpan-body.png'),
    note: '표정보다 자세와 비율이 웃깁니다. 미어캣의 긴 목, 축 처진 어깨와 잘 맞습니다.',
  },
  {
    id: 'D',
    title: '작은 크기 즉시 판독',
    label: 'Tiny Readable',
    image: kakaoExpression('crops/04-guinnie-hwiggy-readable.png'),
    note: '작게 떠도 눈, 입, 방향이 바로 읽히는 기준입니다. 데스크톱 동반자에게 중요합니다.',
  },
  {
    id: 'E',
    title: '빈 눈 무기력',
    label: 'Empty Eyes',
    image: kakaoExpression('crops/05-empty-eyes-bear.png'),
    note: 'Deadpan minimal 축. 눈을 비우고 입을 줄이면 쉬는 중의 무기력이 살아납니다.',
  },
  {
    id: 'F',
    title: '이상한 실루엣',
    label: 'Weird Silhouette',
    image: kakaoExpression('crops/06-gibbon-weird-silhouette.png'),
    note: '긴 목, 큰 손, 어색한 비율처럼 실루엣 자체가 캐릭터가 되는 방향입니다.',
  },
  {
    id: 'G',
    title: '작은 몸 큰 제스처',
    label: 'Big Gesture',
    image: kakaoExpression('crops/07-tiny-hamster-gesture.png'),
    note: '작은 캐릭터일수록 몸 전체의 제스처가 커야 화면 반응으로 읽힙니다.',
  },
  {
    id: 'H',
    title: '단순 선화 표정',
    label: 'Line Rhythm',
    image: kakaoExpression('crops/08-ganadi-line-expression.png'),
    note: '렌더링보다 몇 개의 선 리듬으로 표정을 전달하는 축입니다.',
  },
  {
    id: 'I',
    title: '대중형 단순 동물',
    label: 'Popular Pet',
    image: kakaoExpression('crops/09-kmaltese-popular-dog.png'),
    note: '선물 랭킹형 대중성. 굵지 않은 선, 둥근 얼굴, 작은 몸짓으로 부담 없이 읽힙니다.',
  },
  {
    id: 'J',
    title: '굵은 리액션',
    label: 'Bold Comic',
    image: kakaoExpression('crops/10-thumbs-up-cat-bold.png'),
    note: '작게 봐도 과장된 입, 손, 액션선이 먼저 보이는 방식입니다.',
  },
  {
    id: 'K',
    title: '깔끔한 인기형',
    label: 'Clean Cute',
    image: kakaoExpression('crops/11-small-cute-clean.png'),
    note: '최소 선, 단순 눈, 작고 명확한 제스처. 엽기 축을 보완하는 안전한 귀여움입니다.',
  },
  {
    id: 'L',
    title: '말랑한 캐릭터 덩어리',
    label: 'Squishy Round',
    image: kakaoExpression('crops/12-squishy-baby-roppi.png'),
    note: '실루엣과 면이 둥글게 뭉쳐 있어 움직임 없이도 부드러운 성격이 보입니다.',
  },
  {
    id: 'M',
    title: '둥근 동물 실루엣',
    label: 'Round Animal',
    image: kakaoExpression('crops/13-seal-round-animal.png'),
    note: '몸 전체가 하나의 덩어리로 읽히는 축입니다. 작게 떠 있을 때 외곽선이 강합니다.',
  },
  {
    id: 'N',
    title: '미니 가독형',
    label: 'Mini Readable',
    image: kakaoExpression('crops/14-mini-beans-readable.png'),
    note: '극소형에서도 색 블록, 표정 기호, 짧은 모션으로 상태를 구분하는 방식입니다.',
  },
];

const bodyShapeCards = [
  {
    title: '동글 짧은형',
    image: slice('body-same-pose-00.png'),
    note: '짧은 목과 둥근 몸통. 귀엽지만 데스크톱에서 존재감이 큽니다.',
  },
  {
    title: '기본 균형형',
    image: slice('body-same-pose-01.png'),
    note: '머리, 목, 몸통 비율이 가장 무난한 기준안입니다.',
  },
  {
    title: '긴목 슬림형',
    image: slice('body-same-pose-02.png'),
    note: '목을 길게 빼서 시선 추적과 멍한 표정을 살리기 쉽습니다.',
  },
  {
    title: '두꺼운 긴목형',
    image: slice('body-same-pose-03.png'),
    note: '긴 목을 유지하되 몸통을 안정적으로 키운 방향입니다.',
  },
  {
    title: '미니 압축형',
    image: slice('body-same-pose-04.png'),
    note: '작은 화면에서 읽히도록 몸과 팔다리를 단순화한 방향입니다.',
  },
  {
    title: '배통통형',
    image: slice('body-same-pose-05.png'),
    note: '둥근 몸통으로 하찮고 둔한 인상을 강하게 줍니다.',
  },
  {
    title: '마른 장신형',
    image: slice('body-same-pose-06.png'),
    note: '팔다리와 목이 길어 어색한 매력이 큽니다.',
  },
  {
    title: '큰머리 얇은몸형',
    image: slice('body-same-pose-07.png'),
    note: '머리 표정 비중을 키우고 몸은 작게 눌러 보는 방향입니다.',
  },
];

const characterStyleCards = [
  '동글 마스코트',
  '하찮은 긴목',
  '꼬질 지친형',
  '멍한 긴목형',
  '단순 벡터',
  '둔한 무표정',
  '장난스러운 괴짜',
  '카톡식 단순형',
  '레트로 픽셀',
  '봉제 인형',
  '이상한 초긴목',
  '밈 리액션형',
].map((title, index) => ({
  title,
  image: slice(`character-style-${String(index).padStart(2, '0')}.png`),
}));

const expressionGrammarCards = [
  {
    title: '꼬질 지친형',
    image: slice('expression-grammar-00.png'),
    note: '털과 눈꺼풀을 망가뜨려 귀여운데 지친 상태를 만듭니다.',
  },
  {
    title: 'Goofy Doodle',
    image: slice('expression-grammar-01.png'),
    note: '눈 크기와 입을 비대칭으로 과장해서 표정이 바로 읽힙니다.',
  },
  {
    title: 'Deadpan Minimal',
    image: slice('expression-grammar-02.png'),
    note: '눈과 입을 최소로 줄여 성격이 보이는 무표정입니다.',
  },
  {
    title: '멍한 긴목 반응',
    image: slice('expression-grammar-03.png'),
    note: '두꺼운 긴목, 옆눈, 작은 입. 물음표 에너지가 핵심입니다.',
  },
  {
    title: '작은 크기 마스코트',
    image: slice('expression-grammar-04.png'),
    note: '작게 떠 있어도 눈과 몸 방향이 바로 보이는 방식입니다.',
  },
  {
    title: '초긴목 실루엣',
    image: slice('expression-grammar-05.png'),
    note: '몸 비율 자체가 농담이 되는 디자인입니다.',
  },
  {
    title: '뒤돌아 지친 휴식',
    image: slice('expression-grammar-06.png'),
    note: '다리 쩍벌, 지친 등, 고개만 살짝 돌아간 기본 휴식 축입니다.',
  },
  {
    title: '큰 제스처',
    image: slice('expression-grammar-07.png'),
    note: '작은 몸에 동작을 크게 얹어 화면 반응을 살립니다.',
  },
  {
    title: '깔끔 인기형 적용',
    image: slice('expression-grammar-extra-00.png'),
    note: '둥근 얼굴, 큰 눈, 매끈한 선으로 대중적인 귀여움을 테스트합니다.',
  },
  {
    title: '말랑 덩어리형 적용',
    image: slice('expression-grammar-extra-01.png'),
    note: '몸 전체를 부드러운 덩어리로 만들어 성격을 순하게 바꿉니다.',
  },
  {
    title: '굵은 만화 리액션',
    image: slice('expression-grammar-extra-02.png'),
    note: '큰 입, 큰 손, 강한 액션선으로 즉시 반응을 읽게 합니다.',
  },
  {
    title: '미니 가독형 적용',
    image: slice('expression-grammar-extra-03.png'),
    note: '작은 데스크톱 캐릭터 크기에서도 표정과 아이콘이 남는 축입니다.',
  },
];

const statePoseCards = [
  {
    title: '집중 관찰',
    image: slice('state-pose-00.png'),
    note: '마우스나 화면 변화를 조용히 따라보는 기본 집중 포즈입니다.',
  },
  {
    title: '과집중 긴목',
    image: slice('state-pose-01.png'),
    note: '목을 길게 뽑고 눈을 고정해 집중 강도가 확 올라간 상태입니다.',
  },
  {
    title: '휴식 기본',
    image: slice('state-pose-02.png'),
    note: '다리 쩍벌, 축 처진 등, 얼굴이 일부 보이는 지친 휴식 핵심안입니다.',
  },
  {
    title: '휴식 탈진',
    image: slice('state-pose-03.png'),
    note: '고개가 더 떨어지고 몸 전체가 무너진 휴식 변형입니다.',
  },
  {
    title: '타이핑 반응',
    image: slice('state-pose-04.png'),
    note: '손과 눈이 빠르게 반응하는 상태. 키 입력 피드백에 씁니다.',
  },
  {
    title: '스크롤 회전',
    image: slice('state-pose-05.png'),
    note: '스크롤 방향에 따라 몸과 꼬리가 빙글 도는 모션 기준입니다.',
  },
  {
    title: '노티 호출',
    image: slice('state-pose-06.png'),
    note: '세션 시작/끝, 알림 전달 때 작은 말풍선을 띄우는 기준입니다.',
  },
  {
    title: '완료 안도',
    image: slice('state-pose-07.png'),
    note: '세션 종료 후 힘이 풀린 만족감. 과일을 안고 쉬는 방향입니다.',
  },
];

const reactionExpressionCards = [
  {
    title: '맑은 집중',
    image: slice('reaction-expression-00.png'),
    note: '가장 안전한 귀여움. 기본 상태 아이콘으로 쓰기 좋습니다.',
  },
  {
    title: '꼬질 탈진',
    image: slice('reaction-expression-01.png'),
    note: '휴식, 실패, 장시간 집중 후 지친 상태에 맞는 질감입니다.',
  },
  {
    title: '어리둥절',
    image: slice('reaction-expression-02.png'),
    note: '눈 크기 불균형과 작은 입으로 goofy한 캐릭터성을 살립니다.',
  },
  {
    title: '무기력 무표정',
    image: slice('reaction-expression-03.png'),
    note: '말을 줄이고 분위기만 남기는 deadpan 축입니다.',
  },
  {
    title: '불안 떨림',
    image: slice('reaction-expression-04.png'),
    note: '빠른 타이핑, 실수 감지, 집중 흐트러짐 반응에 어울립니다.',
  },
  {
    title: '커서 추적',
    image: slice('reaction-expression-05.png'),
    note: '눈과 고개가 실시간으로 따라가는 느낌을 강조합니다.',
  },
  {
    title: '타이핑 과열',
    image: slice('reaction-expression-06.png'),
    note: '입, 손, 털선이 모두 빠르게 흔들리는 반응입니다.',
  },
  {
    title: '스크롤 어질',
    image: slice('reaction-expression-07.png'),
    note: '회전 모션과 함께 붙일 수 있는 어지러움 표정입니다.',
  },
  {
    title: '휴식 녹아내림',
    image: slice('reaction-expression-08.png'),
    note: '다리 쩍벌 휴식 포즈와 이어지는 탈진 표정 축입니다.',
  },
  {
    title: '알림 놀람',
    image: slice('reaction-expression-09.png'),
    note: '노티를 캐릭터가 직접 전달할 때 쓰는 즉시 반응입니다.',
  },
  {
    title: '세션 완료 안도',
    image: slice('reaction-expression-10.png'),
    note: '끝났다는 안도감, 졸림, 작게 웃는 느낌을 섞었습니다.',
  },
  {
    title: '밈 클로즈업',
    image: slice('reaction-expression-11.png'),
    note: '과하면 부담스럽지만, 하찮은 캐릭터성 테스트용으로 유효합니다.',
  },
];

const animationCards = ['시선 추적', '타이핑 반응', '스크롤 회전', '과일 장난', '휴식 자세'].map((title, index) => ({
  title,
  image: slice(`animation-${String(index).padStart(2, '0')}.png`),
}));

const partCards = ['파츠 분리 기준', '눈 적용 구조'].map((title, index) => ({
  title,
  image: slice(`parts-${String(index).padStart(2, '0')}.png`),
}));

type PreviewImage = {
  title: string;
  image: string;
  note?: string;
};

function CardGrid({
  cards,
  onPreview,
  columns = 'xl:grid-cols-5',
  compact = false,
}: {
  cards: PreviewImage[];
  onPreview: (card: PreviewImage) => void;
  columns?: string;
  compact?: boolean;
}) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${columns}`}>
      {cards.map((card) => (
        <button
          key={`${card.title}-${card.image}`}
          type="button"
          onClick={() => onPreview(card)}
          className="group block overflow-hidden border border-[#dac6a9] bg-white text-left transition hover:-translate-y-0.5 hover:border-[#b64f18] hover:shadow-[0_10px_24px_rgba(45,33,25,0.14)]"
        >
          <div className={compact ? 'bg-[#fffaf0] p-2' : 'bg-[#fffaf0] p-3'}>
            <img src={card.image} alt={card.title} className="block h-auto w-full" loading="lazy" />
          </div>
          <div className="border-t border-[#eadcc4] bg-[#fffaf0] px-3 py-2">
            <p className="text-sm font-black text-[#2d2119]">{card.title}</p>
            {card.note && <p className="mt-1 text-xs font-bold leading-5 text-[#6d5a48]">{card.note}</p>}
          </div>
        </button>
      ))}
    </div>
  );
}

function ImagePreview({
  preview,
  onClose,
}: {
  preview: PreviewImage | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!preview) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose, preview]);

  if (!preview) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d1711]/85 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={preview.title}
      onClick={onClose}
    >
      <div
        className="flex max-h-full w-full max-w-6xl flex-col border border-[#eadcc4] bg-[#fffaf0] shadow-[0_24px_80px_rgba(0,0,0,0.42)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[#eadcc4] px-3 py-2 sm:px-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-black text-[#2d2119]">{preview.title}</p>
            {preview.note && <p className="hidden truncate text-xs font-bold text-[#6d5a48] sm:block">{preview.note}</p>}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={preview.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center border border-[#d8c6aa] bg-white text-[#2d2119] transition hover:border-[#b64f18] hover:text-[#b64f18]"
              aria-label="새 탭에서 열기"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center border border-[#2d2119] bg-[#2d2119] text-white transition hover:bg-[#b64f18]"
              aria-label="닫기"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="min-h-0 overflow-auto bg-white p-3 sm:p-5">
          <img src={preview.image} alt={preview.title} className="mx-auto block max-h-[78vh] w-auto max-w-full" />
        </div>
      </div>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  description,
  children,
  source,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  source?: string;
}) {
  return (
    <section className="border-t border-[#d8c6aa] px-4 py-9 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1760px]">
        <div className="mb-5 grid gap-3 lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,0.55fr)] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b64f18]">{eyebrow}</p>
            <h2 className="mt-1 text-2xl font-black leading-tight tracking-tight sm:text-4xl">{title}</h2>
          </div>
          <div>
            <p className="text-sm font-semibold leading-6 text-[#6a5949]">{description}</p>
            {source && (
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs font-black uppercase tracking-[0.14em] text-[#b64f18]"
              >
                원본 시트 열기
              </a>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function ConceptPage() {
  const [preview, setPreview] = useState<PreviewImage | null>(null);

  useEffect(() => {
    document.title = 'FocusFruit AD Review';
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3eee2] text-[#251d17]">
      <header className="px-4 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1760px]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#b64f18]">
            FocusFruit Companion AD Review
          </p>
          <h1 className="max-w-5xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            미어캣 캐릭터 선택 보드
          </h1>
          <p className="mt-4 max-w-4xl text-base font-semibold leading-7 text-[#6a5949]">
            AD님이 한 화면에서 비교하기 쉽게 체형, 캐릭터 스타일, 카톡 표현 문법, 우리 캐릭터 적용, 상태별 포즈,
            표정 반응, 모션 구조, 파츠 구조 순서로 다시 정리했습니다. 모든 이미지는 카드 단위로 잘라 크게 볼 수 있습니다.
          </p>
          <div className="mt-6 grid gap-2 sm:grid-cols-4 xl:grid-cols-8">
            {reviewFlow.map((step, index) => (
              <div key={step} className="border border-[#d8c6aa] bg-[#fffaf0] px-3 py-3">
                <p className="text-xs font-black text-[#b64f18]">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-1 text-sm font-black">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <Section
        eyebrow="Step 01"
        title="체형 실루엣 선택"
        description="같은 정면 자세에서 비율만 비교하도록 다시 뽑았습니다. 이제 앉은 자세나 옆모습이 섞이지 않고, 머리·목·몸통·팔다리 비율 차이만 봅니다."
        source={asset('20260613-161928-meerkat-body-same-pose-8.png')}
      >
        <CardGrid cards={bodyShapeCards} onPreview={setPreview} columns="xl:grid-cols-4" />
      </Section>

      <Section
        eyebrow="Step 02"
        title="다양한 미어캣 캐릭터 스타일"
        description="단순 렌더링 질감 비교가 아니라, 서로 다른 실루엣, 얼굴비, 눈모양, 목 비율, 성격을 가진 미어캣 캐릭터 후보를 비교합니다."
        source={asset('20260613-152341-meerkat-character-style-12.png')}
      >
        <CardGrid cards={characterStyleCards} onPreview={setPreview} columns="xl:grid-cols-4" compact />
      </Section>

      <Section
        eyebrow="Step 03"
        title="카톡 표현 문법 레퍼런스"
        description="카톡 레퍼런스는 감정 종류를 고르기 위한 것이 아니라, 캐릭터를 어떻게 단순화하고 과장해서 작은 크기에서도 살아 보이게 만드는지 보기 위한 자료입니다. 기존 엽기·멍함 축에 대중형, 말랑형, 굵은 리액션형, 미니 가독형을 추가했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
          {referenceCards.map((card) => (
            <article key={card.id} className="overflow-hidden border border-[#dac6a9] bg-[#fffaf0]">
              <div className="border-b border-[#eadcc4] px-4 py-3">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b64f18]">
                  {card.id}. {card.label}
                </p>
                <h3 className="mt-1 text-xl font-black">{card.title}</h3>
                <p className="mt-2 text-xs font-bold leading-5 text-[#6d5a48]">{card.note}</p>
              </div>
              <button type="button" onClick={() => setPreview(card)} className="block w-full bg-white p-2 text-left">
                <img src={card.image} alt={card.title} className="block h-auto w-full" loading="lazy" />
              </button>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Step 04"
        title="표현 문법을 우리 미어캣에 적용"
        description="카톡에서 본 표현 문법을 미어캣에 다시 적용한 시안입니다. 얼굴만 바꾸는 것이 아니라 선 두께, 몸 비율, 제스처, 털 질감, 실루엣까지 다르게 보이도록 정리했습니다."
        source={asset('20260613-154143-meerkat-expression-grammar-8.png')}
      >
        <CardGrid cards={expressionGrammarCards} onPreview={setPreview} columns="xl:grid-cols-4" />
      </Section>

      <Section
        eyebrow="Step 05"
        title="상태별 포즈 후보"
        description="지금까지 정한 캐릭터성을 실제 앱 상태에 맞춰 다시 그렸습니다. 휴식 자세는 다리 쩍벌, 지친 등, 살짝 보이는 얼굴이 핵심이고, 타이핑과 스크롤은 화면 반응이 빠르게 읽히는 몸짓을 기준으로 봅니다."
        source={asset('20260613-162057-meerkat-state-pose-candidates-8.png')}
      >
        <CardGrid cards={statePoseCards} onPreview={setPreview} columns="xl:grid-cols-4" />
      </Section>

      <Section
        eyebrow="Step 06"
        title="표정 반응 후보"
        description="기본 얼굴 선택이 아니라 상태 변화에 붙일 표정 세트입니다. 꼬질함, goofy, deadpan, 긴장, 타이핑 과열, 스크롤 어지러움, 휴식 탈진, 노티 놀람처럼 실제 상호작용에서 쓸 반응을 다시 뽑았습니다."
        source={asset('20260613-162223-meerkat-expression-reactions-12.png')}
      >
        <CardGrid cards={reactionExpressionCards} onPreview={setPreview} columns="xl:grid-cols-4" compact />
      </Section>

      <Section
        eyebrow="Step 07"
        title="모션 스토리보드"
        description="시선 추적, 타이핑, 스크롤 회전, 과일 장난, 휴식 자세가 실제 데스크톱 상주 캐릭터에서 방해되지 않을지 보는 단계입니다."
        source={asset('20260613-012314-longneck-animation-storyboard.png')}
      >
        <CardGrid cards={animationCards} onPreview={setPreview} columns="xl:grid-cols-5" />
      </Section>

      <Section
        eyebrow="Step 08"
        title="파츠 분리 기준"
        description="눈, 머리, 바디, 꼬리처럼 따로 움직일 파츠를 나누되, 최종 외곽선은 파츠별이 아니라 캐릭터 전체 기준으로 하나처럼 보이게 가져갈지 확인합니다."
        source={asset('20260613-012101-longneck-parts-guide.png')}
      >
        <CardGrid cards={partCards} onPreview={setPreview} columns="xl:grid-cols-2" />
      </Section>
      <ImagePreview preview={preview} onClose={() => setPreview(null)} />
    </main>
  );
}

export default ConceptPage;
