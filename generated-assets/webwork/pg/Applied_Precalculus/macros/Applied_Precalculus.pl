#############################################################################
# This macro library supports WeBWorK problems from the PreTeXt project named
# Applied Precalculus
#############################################################################


# Return a string containing the latex-image-preamble contents.
# To be used by LaTeXImage objects as in:
# $image->addToPreamble(latexImagePreamble())

sub latexImagePreamble {
return <<'END_LATEX_IMAGE_PREAMBLE'
\usepackage{tikz, pgfplots}
\usepackage{pgfplotstable}
\usetikzlibrary{positioning,matrix,arrows, arrows.meta, positioning}
\usetikzlibrary{shapes,decorations,shadows,fadings,patterns}
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
gpoint with label/.style n args={1}{gcirc,label={#1}}
}

END_LATEX_IMAGE_PREAMBLE
}
