import React from 'react'

const MadeFor = () => {
  return (
    <>
    <h2 className="text-2xl font-bold mt-10">Feito para João Victor</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img src="/album7.jpg" className="w-full rounded" alt="Descobertas da Semana" width={10} height={10}/>
              <strong className="max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis font-semibold">Descobertas da Semana</strong>
              <span className="overflow-hidden text-ellipsis line-clamp-2 text-zinc-500">Sua mixtape semanal cheia de novas descobertas e pérolas musicais escolhidas só pra você. Atualiza toda segunda.</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img src="/album8.jpg" className="w-full rounded" alt="Daily Mix 1" width={10} height={10}/>
              <strong className="max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis font-semibold">Daily Mix 1</strong>
              <span className="overflow-hidden text-ellipsis line-clamp-2 text-zinc-500">Metro Boomin, XXXTENTACION, Future e mais</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img src="/album9.jpg" className="w-full rounded" alt="Daily Mix 2" width={10} height={10}/>
              <strong className="max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis font-semibold">Daily Mix 2</strong>
              <span className="overflow-hidden text-ellipsis line-clamp-2 text-zinc-500">Gunna, Lil Uzi Vert, Playboi Carti e mais</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img src="/album10.jpg" className="w-full rounded" alt="Daily Mix 3" width={10} height={10}/>
              <strong className="max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis font-semibold">Daily Mix 3</strong>
              <span className="overflow-hidden text-ellipsis line-clamp-2 text-zinc-500">Yunk Vino, Derek, Veigh e mais</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img src="/album11.jpg" className="w-full rounded" alt="Daily Mix 4" width={10} height={10}/>
              <strong className="max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis font-semibold">Daily Mix 4</strong>
              <span className="overflow-hidden text-ellipsis line-clamp-2 text-zinc-500">Kordhell, GRAVECHILL, PREXSXNT FXTURE e mais</span>
            </a>
          </div>
    </>
  )
}

export default MadeFor