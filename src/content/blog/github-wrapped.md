---
title: GitHub Wrapped
description: GitHub Wrapped
pubDate: 2025-01-03 14:34
---

<style>
.repo-table-container {
    margin: 2rem 0;
    overflow: hidden;
}

.repo-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
    border: 1px solid #222;
}

.repo-table th {
    background-color: #222;
    color: #e8e8e8;
    font-weight: 600;
    padding: 0.5rem 1rem;
    text-align: left;
}

.repo-table td {
    padding: 0.5rem 1rem;
    color: #4b5563;
    border-bottom: 1px solid #222;
}

.repo-name {
    font-weight: 500;
}

.percentage-cell {
    font-weight: 500;
}

.type-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
}

.type-added {
    background-color: #dbeafe;
    color: #1e40af;
}

.type-class-project {
    background-color: #dcfce7;
    color: #166534;
}

.type-added {
    background-color: #dcfce7;
    color: #166534;
}

.type-removed {
    background-color: #fff1f2;
    color: #9f1239;
}

.type-personal {
    background-color: #fae8ff;
    color: #86198f;
}

.type-class {
    background-color: #fff1f2;
    color: #9f1239;
}

@media (max-width: 640px) {
    .repo-table {
        font-size: 0.875rem;
    }

    .repo-table th,
    .repo-table td {
        padding: 0.75rem;
    }

    .type-badge {
        padding: 0.2rem 0.5rem;
        font-size: 0.75rem;
    }
}
</style>

I wrote a decent amount of code this year:

![GitHub Contributions](../../images/contributions-2024.png)

I was curious to see a breakdown of all that activity, so I got to work last night with a Jupyter REPL and Claude in hand. Frustratingly, I was only able to recover 1062/1412 contributions through the API alone, and wasn't able to debug a several hundred commit discrepancy from the over the summer.

Whatever. Also, if you're expecting more pretty pictures like the one above, then you'll be disappointed. This isn't that type of blog. So, without further ado, my __2024 GitHub Wrapped__.

## By The Numbers

### Commits by Repository (>1%)

<div class="repo-table-container">
    <table class="repo-table">
        <thead>
            <tr>
                <th>Repository</th>
                <th>Percentage</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="repo-name">tjbai/evolver</td>
                <td class="percentage-cell">26.6%</td>
                <td><span class="type-badge type-research">Research</span></td>
            </tr>
            <tr>
                <td class="repo-name">tjbai/ddm</td>
                <td class="percentage-cell">11.8%</td>
                <td><span class="type-badge type-research">Research</span></td>
            </tr>
            <tr>
                <td class="repo-name">tjbai/avlm</td>
                <td class="percentage-cell">10.5%</td>
                <td><span class="type-badge type-class-project">Class Project</span></td>
            </tr>
            <tr>
                <td class="repo-name">tjbai/argo</td>
                <td class="percentage-cell">9.8%</td>
                <td><span class="type-badge type-research">Research</span></td>
            </tr>
            <tr>
                <td class="repo-name">tjbai/llmr</td>
                <td class="percentage-cell">8.6%</td>
                <td><span class="type-badge type-class-project">Class Project</span></td>
            </tr>
            <tr>
                <td class="repo-name">tjbai/aoc</td>
                <td class="percentage-cell">4.1%</td>
                <td><span class="type-badge type-personal">Personal</span></td>
            </tr>
            <tr>
                <td class="repo-name">tjbai/neurstat</td>
                <td class="percentage-cell">3.5%</td>
                <td><span class="type-badge type-class-project">Class Project</span></td>
            </tr>
            <tr>
                <td class="repo-name">tjbai/bstat</td>
                <td class="percentage-cell">3.3%</td>
                <td><span class="type-badge type-class">Class</span></td>
            </tr>
            <tr>
                <td class="repo-name">tjbai/ji</td>
                <td class="percentage-cell">3.1%</td>
                <td><span class="type-badge type-personal">Personal</span></td>
            </tr>
            <tr>
                <td class="repo-name">tjbai/cv</td>
                <td class="percentage-cell">2.9%</td>
                <td><span class="type-badge type-class">Class</span></td>
            </tr>
            <tr>
                <td class="repo-name">tjbai/blog</td>
                <td class="percentage-cell">2.4%</td>
                <td><span class="type-badge type-personal">Personal</span></td>
            </tr>
            <tr>
                <td class="repo-name">tjbai/front</td>
                <td class="percentage-cell">2.0%</td>
                <td><span class="type-badge type-personal">Personal</span></td>
            </tr>
            <tr>
                <td class="repo-name">tjbai/cogai</td>
                <td class="percentage-cell">1.8%</td>
                <td><span class="type-badge type-class">Class</span></td>
            </tr>
        </tbody>
    </table>
</div>

Unsurprisingly, the top of this list is dominated by some private research repositores (evolver, ddm, argo) along with a couple course projects from this past semester (avlm, llmr). Collectively, those repos are exclusively language model-related research projects. Sign of the times.

Past that, there's a steep fall off and the rest is a mix of random homework repos (bstat, cogai, cv) or personal websites/productivity tools (blog, front, ji). It's funny to see my [Advent of Code](https://en.wikipedia.org/wiki/Advent_of_Code) repo (aoc) in 6th place, considering all those commits were exclusively made during a 2-3 week period at the start of December.

## Work Patterns

### Commits by Month

![Monthly Breakdown](../../images/month_breakdown.png)

There was a steady ramp-up last spring as I got deeper into a project with Jason, interrupted by a steep drop-off near finals, followed by a couple grindy months double-timing work and research in Austin, right into a predictably heavy burnout this past fall. I did manage to get my swagger back to close out the year though between Advent of Code, course projects, and getting back into research.

### Commits by Day

![Daily Breakdown](../../images/weekday_breakdown.png)

I love this chart. I always attack the week with a full head of steam, regress to my normal levels of productivity mid-week, and then take a couple days of "deserving" rest. Evidently, the Sunday Scaries are enough to jump start me back into motion.

## Under The Hood

### Commits By Programming Language

<div class="repo-table-container">
    <table class="repo-table">
        <thead>
            <tr>
                <th>Extension</th>
                <th>Added</th>
                <th>Removed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="repo-name">.py</td>
                <td><span class="type-badge type-added">47,153</span></td>
                <td><span class="type-badge type-removed">22,638</span></td>
            </tr>
            <tr>
                <td class="repo-name">.sh</td>
                <td><span class="type-badge type-added">1,762</span></td>
                <td><span class="type-badge type-removed">1,084</span></td>
            </tr>
            <tr>
                <td class="repo-name">.scala</td>
                <td><span class="type-badge type-added">1,081</span></td>
                <td><span class="type-badge type-removed">223</span></td>
            </tr>
            <tr>
                <td class="repo-name">.m</td>
                <td><span class="type-badge type-added">1,861</span></td>
                <td><span class="type-badge type-removed">286</span></td>
            </tr>
            <tr>
                <td class="repo-name">.R</td>
                <td><span class="type-badge type-added">273</span></td>
                <td><span class="type-badge type-removed">7</span></td>
            </tr>
        </tbody>
    </table>
</div>

In 2024 I wrote a lot of... Python. I remarked to a friend last spring that my familiarity with this language probably qualified me as trilingual. In the year since, nothing's really changed, and there really isn't a better option/lesser evil than Python for all my research work.

At least 90% of the Bash I wrote was autogenerated to queue SLURM jobs on various supercomputers. I picked up Scala late in the year during Advent of Code as a new challenge and because it's the language of choice at my future employer. 100% of the Matlab and R code was against my will for miscellaneous classwork.

### Commits By Configuration Language

<div class="repo-table-container">
    <table class="repo-table">
        <thead>
            <tr>
                <th>Extension</th>
                <th>Added</th>
                <th>Removed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="repo-name">.json</td>
                <td><span class="type-badge type-added">755,096</span></td>
                <td><span class="type-badge type-removed">363,210</span></td>
            </tr>
            <tr>
                <td class="repo-name">.md</td>
                <td><span class="type-badge type-added">98,885</span></td>
                <td><span class="type-badge type-removed">3,211</span></td>
            </tr>
            <tr>
                <td class="repo-name">.yml</td>
                <td><span class="type-badge type-added">2,502</span></td>
                <td><span class="type-badge type-removed">560</span></td>
            </tr>
            <tr>
                <td class="repo-name">.toml</td>
                <td><span class="type-badge type-added">1,124</span></td>
                <td><span class="type-badge type-removed">4</span></td>
            </tr>
        </tbody>
    </table>
</div>

This really isn't a fair comparison because >90% of that JSON comes from constant paranoid data dumps for fear of losing reproducibility. I _did_ use it as my plain-text config format of choice for most of the year, but eventually shifted over to YAML because of improved ergonomics like being able to write comments. Almost all of the TOML can be attributed to autogenerated `pyproject.toml` files as a result of recently adopting `uv` as my package manager of choice.

### The Whole Kitchen Sink (>100 lines)

<div class="repo-table-container">
    <table class="repo-table">
        <thead>
            <tr>
                <th>Extension</th>
                <th>Added</th>
                <th>Removed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="repo-name">.json</td>
                <td><span class="type-badge type-added">755,096</span></td>
                <td><span class="type-badge type-removed">363,210</span></td>
            </tr>
            <tr>
                <td class="repo-name">.vocab</td>
                <td><span class="type-badge type-added">572,522</span></td>
                <td><span class="type-badge type-removed">36,710</span></td>
            </tr>
            <tr>
                <td class="repo-name">.conllu</td>
                <td><span class="type-badge type-added">590,027</span></td>
                <td><span class="type-badge type-removed">0</span></td>
            </tr>
            <tr>
                <td class="repo-name">.ipynb</td>
                <td><span class="type-badge type-added">189,866</span></td>
                <td><span class="type-badge type-removed">169,277</span></td>
            </tr>
            <tr>
                <td class="repo-name">.jsonl</td>
                <td><span class="type-badge type-added">249,180</span></td>
                <td><span class="type-badge type-removed">77,642</span></td>
            </tr>
            <tr>
                <td class="repo-name">.md</td>
                <td><span class="type-badge type-added">98,885</span></td>
                <td><span class="type-badge type-removed">3,211</span></td>
            </tr>
            <tr>
                <td class="repo-name">.py</td>
                <td><span class="type-badge type-added">47,153</span></td>
                <td><span class="type-badge type-removed">22,638</span></td>
            </tr>
            <tr>
                <td class="repo-name">.html</td>
                <td><span class="type-badge type-added">400</span></td>
                <td><span class="type-badge type-removed">68,489</span></td>
            </tr>
            <tr>
                <td class="repo-name">.txt</td>
                <td><span class="type-badge type-added">24,027</span></td>
                <td><span class="type-badge type-removed">15,638</span></td>
            </tr>
            <tr>
                <td class="repo-name">.out</td>
                <td><span class="type-badge type-added">11,872</span></td>
                <td><span class="type-badge type-removed">1,797</span></td>
            </tr>
            <tr>
                <td class="repo-name">.csv</td>
                <td><span class="type-badge type-added">4,152</span></td>
                <td><span class="type-badge type-removed">4</span></td>
            </tr>
            <tr>
                <td class="repo-name">.lock</td>
                <td><span class="type-badge type-added">3,498</span></td>
                <td><span class="type-badge type-removed">370</span></td>
            </tr>
            <tr>
                <td class="repo-name">.yml</td>
                <td><span class="type-badge type-added">2,502</span></td>
                <td><span class="type-badge type-removed">560</span></td>
            </tr>
            <tr>
                <td class="repo-name">.sh</td>
                <td><span class="type-badge type-added">1,762</span></td>
                <td><span class="type-badge type-removed">1,084</span></td>
            </tr>
            <tr>
                <td class="repo-name">.m</td>
                <td><span class="type-badge type-added">1,861</span></td>
                <td><span class="type-badge type-removed">286</span></td>
            </tr>
            <tr>
                <td class="repo-name">.log</td>
                <td><span class="type-badge type-added">1,620</span></td>
                <td><span class="type-badge type-removed">1,573</span></td>
            </tr>
            <tr>
                <td class="repo-name">.css</td>
                <td><span class="type-badge type-added">1,252</span></td>
                <td><span class="type-badge type-removed">94</span></td>
            </tr>
            <tr>
                <td class="repo-name">.scala</td>
                <td><span class="type-badge type-added">1,081</span></td>
                <td><span class="type-badge type-removed">223</span></td>
            </tr>
            <tr>
                <td class="repo-name">.toml</td>
                <td><span class="type-badge type-added">1,124</span></td>
                <td><span class="type-badge type-removed">4</span></td>
            </tr>
            <tr>
                <td class="repo-name">.gen</td>
                <td><span class="type-badge type-added">906</span></td>
                <td><span class="type-badge type-removed">906</span></td>
            </tr>
            <tr>
                <td class="repo-name">.astro</td>
                <td><span class="type-badge type-added">644</span></td>
                <td><span class="type-badge type-removed">126</span></td>
            </tr>
            <tr>
                <td class="repo-name">.dat</td>
                <td><span class="type-badge type-added">744</span></td>
                <td><span class="type-badge type-removed">0</span></td>
            </tr>
            <tr>
                <td class="repo-name">.R</td>
                <td><span class="type-badge type-added">273</span></td>
                <td><span class="type-badge type-removed">7</span></td>
            </tr>
            <tr>
                <td class="repo-name">None</td>
                <td><span class="type-badge type-added">454</span></td>
                <td><span class="type-badge type-removed">175</span></td>
            </tr>
        </tbody>
    </table>
</div>

The _full_ picture is a lot less interesting because of the overwhelming amount of data input/output stuff or autogenerated files. This does take me back to some interesting experiments though, like when I was messing with dependency parsers (.conllu) or hand rolling BPE tokenization (.vocab). I also apparently can't make up my mind between `.log` and `.out` for log files.

## What were my commits about?

### Most Frequent Commit Message Tokens

| Type    | Count |
| ------- | ----- |
| fix     | 98    |
| add     | 87    |
| some    | 57    |
| stuff   | 56    |
| update  | 52    |
| config  | 43    |
| added   | 36    |
| eval    | 35    |
| updated | 35    |
| init    | 34    |

If I had been consistent with my tenses, then this chart would show that I *add* and *added* more than I *fixed*, thus proving that I am a good programmer after all. Apparently, I also did a lot of *stuff*. init    | 34    |
