#############################################################################
# This macro library supports WeBWorK problems from the PreTeXt project named
# Applied Precalculus
#############################################################################


TEXT(
    MODES(
        HTML => '<div style="display:none;">' . general_math_ev3(<<'EOF') . '</div>',
\newcommand{\N}{\mathbb N}
\newcommand{\Z}{\mathbb Z}
\newcommand{\Q}{\mathbb Q}
\newcommand{\R}{\mathbb R}
\usepackage{xcolor,color}
\newcommand{\aroc}{\text{ARC}}
\newcommand{\pbr}[1]{\left( #1 \right)}
\newcommand{\sbr}[1]{\left\{ #1 \right\}}
\newcommand{\cbr}[1]{\left[ #1 \right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
\newcommand{\markcell}[2]{
\tikz[remember picture, baseline=(#1.base)] \node[inner sep=0pt] (#1) {#2};
}
\newcommand{\amp}{&}
EOF
        TeX => '\ifdefined\ptxmacros\else ' . <<'EOF'
\newcommand{\N}{\mathbb N}
\newcommand{\Z}{\mathbb Z}
\newcommand{\Q}{\mathbb Q}
\newcommand{\R}{\mathbb R}
\usepackage{xcolor,color}
\newcommand{\aroc}{\text{ARC}}
\newcommand{\pbr}[1]{\left( #1 \right)}
\newcommand{\sbr}[1]{\left\{ #1 \right\}}
\newcommand{\cbr}[1]{\left[ #1 \right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
\newcommand{\markcell}[2]{
\tikz[remember picture, baseline=(#1.base)] \node[inner sep=0pt] (#1) {#2};
}
\newcommand{\amp}{&}
\def\ptxmacros{}
EOF
. '\fi',
        PTX => ''
    )
);

# Return a string containing the latex-image-preamble contents.
# To be used by LaTeXImage objects as in:
# $image->addToPreamble(latexImagePreamble())

sub latexImagePreamble {
return <<'END_LATEX_IMAGE_PREAMBLE'
\usepackage{tikz, pgfplots}
\usepackage{pgfplotstable}
\usetikzlibrary{positioning,matrix,arrows, arrows.meta, positioning}
\usetikzlibrary{shapes,decorations,shadows,fadings,patterns}
\usetikzlibrary{angles,quotes}
\usetikzlibrary{decorations.markings}
\pgfplotsset{
soldot/.style={
    color=black,only marks,mark=*},
holdot/.style={
    color=black,fill=white,only marks,mark=*},
compat=1.18,
standard/.style={
    every axis x label/.style={at={(current axis.right of origin)},anchor=north west},
    every axis y label/.style={at={(current axis.above origin)},anchor=north east}},
    every axis plot/.append style={blue,thick,samples=250},
    every axis/.append style = {axis lines = middle},
}
\tikzset{
rcirc/.style={circle, fill=red, inner sep=2pt},
rpoint with label/.style n args={1}{rcirc,label={#1}},
gcirc/.style={circle, fill=green, inner sep=2pt},
gpoint with label/.style n args={1}{gcirc,label={#1}},
my angle/.style={every pic quotes/.append style={text=black}, draw=red, angle radius=1cm}
}

END_LATEX_IMAGE_PREAMBLE
}

1;
