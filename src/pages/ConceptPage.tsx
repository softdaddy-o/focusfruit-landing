import { useEffect } from 'react';
import {
  Activity,
  CheckCircle2,
  Eye,
  Layers3,
  MousePointer2,
  PencilRuler,
  Sparkles,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const asset = (name: string) => `/concept/${name}`;

const decisions = [
  '캐릭터성: 긴 목에 멍하고 수상한 미어캣',
  '렌더링: F 픽셀 하이브리드, 100-140px 가독성 우선',
  '톤: 귀엽기보다 하찮고 이상한데 정 가는 방향',
  '규칙: 파츠는 분리하되 외곽선은 합친 캐릭터 기준',
];

const pipeline = [
  {
    step: '01',
    title: '렌더링 스타일 고정',
    status: '선택 완료',
    icon: PencilRuler,
    image: asset('20260612-235923-rendering-style-matrix.png'),
    caption: '6개 렌더링 비교에서 F 저해상도 스프라이트 방향을 기준으로 선택.',
    notes: ['F를 기준으로 픽셀감과 스티커 외곽선을 유지', 'D/B/C의 이상함과 털 질감은 보조 레퍼런스로 흡수'],
  },
  {
    step: '02',
    title: '얼굴과 100px 가독성',
    status: '후보 압축',
    icon: Eye,
    image: asset('20260613-000936-longneck-f-face-matrix.png'),
    caption: '4번 캐릭터성과 F 렌더링을 고정한 얼굴 12종 매트릭스.',
    notes: ['메인 후보: 1, 2, 4, 9, 11', '10은 특수 개그 표정, 12는 너무 귀여운 방향'],
  },
  {
    step: '03',
    title: '엽기 표정 확장',
    status: '추가 탐색',
    icon: Sparkles,
    image: asset('20260612-234336-kkureungi-inspired-weird-samples.png'),
    caption: '눈 뒤집힘, 눌린 코, 힘 빠진 입 주변처럼 밈성이 강한 표정 탐색.',
    notes: ['기본 얼굴과 분리해 특수 반응 표정으로 운용', '장시간 집중, 타이핑 과열, 실패/중단 반응에 사용'],
  },
  {
    step: '04',
    title: '포즈 세트 검증',
    status: '재작업 예정',
    icon: Activity,
    image: asset('20260612-222323-style-c-focus-rest-typing.png'),
    caption: '집중, 휴식, 타이핑 포즈의 역할을 먼저 확인한 시트.',
    notes: ['다음 버전은 F 스타일과 긴 목 캐릭터로 다시 제작', '뒤돌아 휴식 포즈는 발바닥이 보이지 않게 고정'],
  },
  {
    step: '05',
    title: '파츠 분리와 앱 애니메이션',
    status: '구현 검증',
    icon: Layers3,
    image: asset('companion-rest-three-quarter-head-track.png'),
    caption: '눈 트래킹, 머리 회전, 타이핑 떨림, 스크롤 회전 테스트를 위한 앱 적용 단계.',
    notes: ['머리, 눈, 눈꺼풀, 입, 몸, 팔, 꼬리, 귤 소품 분리', '마우스 추적은 눈과 머리가 함께 반응'],
  },
];

const supportingSheets = [
  {
    title: '엽기 귀여움 방향 3종 비교',
    image: asset('20260612-233615-style-weird-a-b-c-comparison.png'),
  },
  {
    title: '초기 포즈와 파츠 가이드',
    image: asset('20260612-222323-style-c-focus-rest-typing.png'),
  },
  {
    title: '현재 앱 픽셀 미어캣 스냅샷',
    image: asset('companion-meerkat-pixel.png'),
  },
  {
    title: '과일 테마 적용 체크',
    image: asset('companion-watermelon-check.png'),
  },
];

function ConceptPage() {
  useEffect(() => {
    document.title = 'FocusFruit Companion Concept';
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f1e5] text-[#221a14]">
      <Header />

      <main className="pt-28">
        <section className="section-padding pb-12">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 border border-[#d5b17b] bg-[#fff8eb] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#7b3f18]">
                FocusFruit Companion Concept
              </p>
              <h1 className="font-display text-[42px] font-black leading-[0.98] text-[#24160d] sm:text-6xl lg:text-7xl">
                <span className="block">하찮은 미어캣을</span>
                <span className="block text-[#d85b16]">제품 캐릭터로</span>
                <span className="block text-[#d85b16]">고정하기</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#614d3f]">
                지금까지 만든 시안을 한 페이지에서 보고, 스타일 선택부터 앱 애니메이션 적용까지
                5단계 파이프라인으로 추적하는 콘셉트 보드입니다.
              </p>
            </div>

            <div className="border border-[#d9c8aa] bg-[#fffaf0] p-4 shadow-[10px_10px_0_#23160d]">
              <img
                src={asset('20260613-000936-longneck-f-face-matrix.png')}
                alt="긴 목 F 스타일 얼굴 12종 매트릭스"
                className="w-full border border-[#eadcc4] bg-white"
              />
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {decisions.map((decision) => (
                  <div key={decision} className="flex gap-2 text-sm font-semibold text-[#463529]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d85b16]" />
                    <span>{decision}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#ddc9a5] bg-[#24160d] section-padding py-5 text-[#fff4dd]">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 text-sm font-bold">
            <span className="mr-2 text-[#ffb14a]">Current pick</span>
            <span className="border border-[#6d4a2e] px-3 py-1">Character 4</span>
            <span className="border border-[#6d4a2e] px-3 py-1">Rendering F</span>
            <span className="border border-[#6d4a2e] px-3 py-1">Face 1/2/4/9/11 candidates</span>
            <span className="border border-[#6d4a2e] px-3 py-1">Weird expressions as reaction set</span>
          </div>
        </section>

        <section className="section-padding py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a94d1a]">Pipeline</p>
                <h2 className="mt-2 font-display text-4xl font-black text-[#24160d]">5단계로 끝까지 보기</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#725c49]">
                각 단계는 선택 기준, 현재 산출물, 다음에 확인할 리스크를 함께 보여줍니다.
              </p>
            </div>

            <div className="space-y-8">
              {pipeline.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.step}
                    className="grid gap-5 border border-[#dcc9a8] bg-[#fffaf0] p-4 shadow-[6px_6px_0_#d85b16] md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)_280px]"
                  >
                    <div className="flex flex-col justify-between gap-5 border-b border-[#e8d9bd] pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-5">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-display text-4xl font-black text-[#d85b16]">{item.step}</span>
                          <Icon className="h-6 w-6 text-[#24160d]" />
                        </div>
                        <h3 className="mt-4 text-2xl font-black text-[#24160d]">{item.title}</h3>
                      </div>
                      <span className="w-fit border border-[#d5b17b] bg-[#ffe7b8] px-3 py-1 text-xs font-black text-[#7b3f18]">
                        {item.status}
                      </span>
                    </div>

                    <figure>
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full border border-[#eadcc4] bg-white"
                        loading="lazy"
                      />
                      <figcaption className="mt-3 text-sm font-semibold leading-6 text-[#6c5442]">
                        {item.caption}
                      </figcaption>
                    </figure>

                    <div className="border-t border-[#e8d9bd] pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                      <p className="mb-3 flex items-center gap-2 text-sm font-black text-[#24160d]">
                        <MousePointer2 className="h-4 w-4 text-[#d85b16]" />
                        체크할 것
                      </p>
                      <ul className="space-y-3">
                        {item.notes.map((note) => (
                          <li key={note} className="text-sm leading-6 text-[#5d4939]">
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a94d1a]">Reference board</p>
              <h2 className="mt-2 font-display text-4xl font-black text-[#24160d]">보조 시안 모음</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {supportingSheets.map((sheet) => (
                <figure key={sheet.title} className="border border-[#dcc9a8] bg-[#fffaf0] p-4">
                  <img
                    src={sheet.image}
                    alt={sheet.title}
                    className="w-full border border-[#eadcc4] bg-white"
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-sm font-black text-[#3c2a1f]">{sheet.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ConceptPage;
