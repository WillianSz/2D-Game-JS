class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial

    this.velocidadeDoPulo = 0;
    this.gravidade = 6
    this.alturaDoPulo = -50
    this.pulos = 0
  }
  pula() {
    if (this.pulos < 3) {
          this.velocidadeDoPulo = this.alturaDoPulo
          this.pulos++
        }
    
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial){
      this.y = this.yInicial
      this.pulos = 0
    }
  }

  
  estaColidindo(inimigo) {
    noFill();
    rect(
      this.x +20,
      this.y +30,
      this.largura -50,
      this.altura -30
    )
      rect(
      inimigo.x +20,
      inimigo.y +15,
      inimigo.largura - 30,
      inimigo.altura -30
    )
    const precisao = .7
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x +20,
      inimigo.y +15,
      inimigo.largura - 30,
      inimigo.altura -30
    );
    return colisao;
  }

}
